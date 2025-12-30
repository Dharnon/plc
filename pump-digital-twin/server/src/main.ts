
import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';
import path from 'path';
import compression from 'compression';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(compression());
app.use(express.json());

// Serve static files from the React app build directory
// In Prod: root/server/dist/main.js -> root/dist
// In Dev: root/server/src/main.ts -> root/dist (if we want to test serving)
const CLIENT_BUILD_PATH = path.join(__dirname, '../../dist');

// Serve static files
// Serve static files
app.use(express.static(CLIENT_BUILD_PATH));

// --- API Implementation ---
import prisma from './db';
import multer from 'multer';
import * as XLSX from 'xlsx';

const upload = multer({ storage: multer.memoryStorage() });

// 1. Excel Import Endpoint
app.post('/api/import-excel', upload.single('file'), async (req: any, res: any) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const workbook = XLSX.read(req.file.buffer);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Skip first 2 rows (header area)
        const rawData = XLSX.utils.sheet_to_json<string[]>(sheet, { header: 1 });
        const dataRows = rawData.slice(2);

        const newRecords = [];

        for (const row of dataRows) {
            if (!row || row.length === 0) continue;

            const pedidoPosicion = String(row[1] || '').trim();
            const cliente = String(row[2] || '').trim();

            if (!pedidoPosicion && !cliente) continue;

            const modeloBomba = String(row[12] || '').trim(); // Col M
            const ordenTrabajo = String(row[17] || '').trim(); // Col R
            const numeroBombasRaw = row[20]; // Col U

            const [pedido, posicion] = pedidoPosicion.includes('-')
                ? pedidoPosicion.split('-').map(s => s.trim())
                : [pedidoPosicion, ''];

            const numeroBombas = typeof numeroBombasRaw === 'number'
                ? numeroBombasRaw
                : parseInt(String(numeroBombasRaw || '1'), 10) || 1;

            newRecords.push({
                pedido,
                posicion,
                cliente,
                modeloBomba,
                ordenTrabajo,
                numeroBombas
                // item, pedidoCliente optional/missing mapping in excel
            });
        }

        // Transaction: Clear processed:false from Staging and Insert new
        await prisma.$transaction(async (tx) => {
            // "al importar un nuevo excel todos los demas que esten sin procesar anteriores se eliminan"
            // We assume "sin procesar" matches processed: false
            await tx.pedidoImportado.deleteMany({
                where: { procesado: false }
            });

            if (newRecords.length > 0) {
                await tx.pedidoImportado.createMany({
                    data: newRecords
                });
            }
        });

        res.json({ success: true, count: newRecords.length });

    } catch (error) {
        console.error('Import error:', error);
        res.status(500).json({ error: 'Failed to import Excel' });
    }
});

// 2. Get Tests Endpoint (Combine Staging + Production)
app.get('/api/tests', async (req, res) => {
    try {
        // A. Fetch Staging (Pending)
        const pendingImports = await prisma.pedidoImportado.findMany({
            where: { procesado: false },
            orderBy: { id: 'asc' }
        });

        // B. Fetch Production (Generated/Completed)
        const productionTests = await prisma.prueba.findMany({
            include: {
                banco: true,
                cliente: true,
                bomba: true,
                motor: true,
                detalles: true
            },
            orderBy: { fecha: 'desc' },
            take: 50 // Limit 
        });

        // C. Map to Common Interface (TestRequest)
        const mappedPending = pendingImports.map((p: any) => ({
            id: `import-${p.id}`,
            status: 'PENDING_PDF',
            generalInfo: {
                pedido: p.pedido,
                posicion: p.posicion,
                modeloBomba: p.modeloBomba,
                ordenTrabajo: p.ordenTrabajo,
                cliente: p.cliente,
                numeroBombas: p.numeroBombas
            },
            createdAt: p.fechaImportacion.toISOString()
        }));

        const mappedProduction = productionTests.map((p: any) => ({
            id: `prod-${p.numeroProtocolo}`,
            status: 'GENERATED',
            generalInfo: {
                pedido: `Protocolo ${p.numeroProtocolo}`,
                posicion: '',
                modeloBomba: p.bomba?.tipoBomba || '',
                ordenTrabajo: '',
                cliente: p.cliente?.nombre || '',
                numeroBombas: 1,
                // We might want to store original Order info in Prueba/Detalles to retrieve it accurately
            },
            specs: {
                flowRate: 0, // Fill from DB loop if needed, for listing maybe not needed
                head: 0,
                rpm: p.motor?.velocidad || 0,
                maxPower: p.motor?.potencia || 0,
                // ... populate if needed for the table
            },
            createdAt: p.fecha.toISOString()
        }));

        // @ts-ignore
        res.json([...mappedPending, ...mappedProduction]);

    } catch (error) {
        console.error('Get Tests error:', error);
        res.status(500).json({ error: 'Failed to fetch tests' });
    }
});

// 3. Generate/Complete Test Endpoint
app.post('/api/tests/generate', async (req, res) => {
    const { id, generalInfo, specs, testsToPerform } = req.body;

    console.log('Generating test for:', id);

    try {
        await prisma.$transaction(async (tx) => {
            // 1. Resolve Dependencies

            // Client: Find or Create
            let cliente = await tx.cliente.findFirst({ where: { nombre: generalInfo.cliente } });
            if (!cliente) {
                cliente = await tx.cliente.create({
                    data: { nombre: generalInfo.cliente }
                });
            }

            // Banco: Find first available or Create default
            let banco = await tx.banco.findFirst();
            if (!banco) {
                banco = await tx.banco.create({
                    data: { nombre: 'Banco Principal', estado: true }
                });
            }

            // Motor
            const motor = await tx.motor.create({
                data: {
                    marca: 'Generico', // Placeholder
                    tipo: 'Generico',
                    potencia: specs?.maxPower || 0,
                    velocidad: specs?.rpm || 0,
                    estado: true
                }
            });

            // Bomba
            const bomba = await tx.bomba.create({
                data: {
                    tipoBomba: generalInfo.modeloBomba,
                    item: generalInfo.item,
                    diametroImpulsion: specs?.dischargeDiameter,
                    diametroAspiracion: specs?.suctionDiameter,
                    diametroRodete: String(specs?.impellerDiameter || ''),
                    tipoCierre: specs?.sealType
                }
            });

            // Detalles
            const detalles = await tx.detalles.create({
                data: {
                    comentario: `Generado desde ${id} / Pedido: ${generalInfo.pedido}`,
                    temperaturaAgua: specs?.temperature,
                    // map other fields
                }
            });

            // 2. Create Prueba
            const prueba = await tx.prueba.create({
                data: {
                    detallesId: detalles.id,
                    motorId: motor.id,
                    bombaId: bomba.id,
                    clienteId: cliente.id,
                    bancoId: banco.id,
                    fecha: new Date(),
                }
            });

            // 3. Remove from Staging if it was an import
            if (id && String(id).startsWith('import-')) {
                const importId = parseInt(id.replace('import-', ''));
                if (!isNaN(importId)) {
                    // Option A: Delete
                    // await tx.pedidoImportado.delete({ where: { id: importId } });
                    // Option B: Mark processed (Better for history?)
                    // Schema has procesado: Boolean
                    await tx.pedidoImportado.update({
                        where: { id: importId },
                        data: { procesado: true }
                    });
                }
            }

            return prueba;
        });

        res.json({ success: true });

    } catch (error) {
        console.error('Generate test error:', error);
        res.status(500).json({ error: 'Failed to generate test' });
    }
});

app.post('/api/generate-pdf', async (req, res) => {
    console.log('Generating PDF request received');
    const reportData = req.body;

    let browser;
    try {
        const launchOptions: any = {
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        };

        // In airtight environments, we prioritize existing browser installations
        if (process.env.CHROME_PATH) {
            launchOptions.executablePath = process.env.CHROME_PATH;
        } else if (process.platform === 'win32') {
            // Default to Edge on Windows (usually pre-installed on Server 2019/2022)
            launchOptions.channel = 'msedge';
        }

        browser = await puppeteer.launch(launchOptions);
        const page = await browser.newPage();

        // 1. Navigate to the frontend report preview page
        // If running in production (served by this express app)
        const baseUrl = process.env.NODE_ENV === 'production'
            ? `http://localhost:${PORT}`
            : 'http://localhost:5173';

        const frontendUrl = `${baseUrl}/report/preview`;

        console.log(`Navigating to ${frontendUrl}...`);

        // Optimize loading: wait until network is idle implies most assets are loaded
        await page.goto(frontendUrl, { waitUntil: 'networkidle0' });

        // 2. Inject the Real Data into the page context
        // The frontend component must be updated to look for 'window.REPORT_DATA'
        console.log('Injecting report data...');
        await page.evaluate((data) => {
            // @ts-ignore
            window.REPORT_DATA = data;
        }, reportData);

        // 3. Force a re-render or wait for React to pick up changes 
        // (If React doesn't pick up window variable change automatically, we might need a custom event)
        // For simplicity, we assume the frontend checks window.REPORT_DATA on mount or we reload.
        // Better strategy: Reload with data in localStorage, or dispatch event.
        // Strategy B: We set window.REPORT_DATA *before* other scripts run? Difficult with SPA.
        // Strategy C: Dispatch a CustomEvent that the React component listens to.
        await page.evaluate((data) => {
            const event = new CustomEvent('REPORT_DATA_UPDATE', { detail: data });
            window.dispatchEvent(event);
        }, reportData);

        // Give React a moment to update the DOM with new data
        await new Promise(r => setTimeout(r, 1000));

        // 4. Generate PDF
        console.log('Printing PDF...');
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: 0, right: 0, bottom: 0, left: 0 } // Layout handles margins
        });

        console.log('PDF Generated successfully');
        res.set('Content-Type', 'application/pdf');
        res.set('Content-Disposition', 'attachment; filename=report.pdf');
        res.send(Buffer.from(pdfBuffer));

    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).json({ error: 'Failed to generate PDF' });
    } finally {
        if (browser) {
            await browser.close();
        }
    }
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`PDF Service running on http://localhost:${PORT}`);
});
