/**
 * Pump IoT Platform - API Server
 * @description Express REST API for pump testing management
 * @version 1.0.0
 */

import express, { Express } from 'express';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import winston from 'winston';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { logger } from './utils/logger';
import { prisma } from './lib/db';

// Load environment variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 4000;

// --- Swagger Configuration ---
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pump IoT Platform API',
            version: '1.0.0',
            description: 'REST API for pump testing management - Flowserve',
            contact: {
                name: 'Flowserve IoT Team'
            }
        },
        servers: [
            { url: `http://localhost:${PORT}`, description: 'Development' }
        ],
        tags: [
            { name: 'Health', description: 'Health check endpoints' },
            { name: 'Auth', description: 'Authentication endpoints' },
            { name: 'Tests', description: 'Test management' },
            { name: 'Import', description: 'CSV/Excel import' },
            { name: 'Reports', description: 'Report generation' }
        ]
    },
    apis: ['./src/main.ts']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: 'Pump IoT API Docs'
}));

// --- Middleware ---
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(compression());
app.use(express.json());

// --- Root Route (API Info) ---
/**
 * @swagger
 * /:
 *   get:
 *     summary: API Information
 *     description: Returns API name, version, and available endpoints
 *     responses:
 *       200:
 *         description: API info
 */
app.get('/', (req, res) => {
    res.json({
        name: 'Pump IoT Platform API',
        version: '1.0.0',
        docs: '/api-docs',
        endpoints: {
            health: 'GET /api/health',
            login: 'POST /api/auth/login',
            tests: 'GET /api/tests',
            listados: 'GET /api/listados',
            importExcel: 'POST /api/import-excel',
            importCsv: 'POST /api/import-csv',
            reports: 'GET /api/reports/:id',
            generatePdf: 'POST /api/reports/pdf'
        }
    });
});

/**
 * @swagger
 * /api/health:
 *   get:
 *     tags: [Health]
 *     summary: Health Check
 *     description: Returns API health status
 *     responses:
 *       200:
 *         description: API is healthy
 */
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// --- Auth Module (Hardcoded for Phase 1) ---
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;

    // Hardcoded credentials for Phase 1
    if (username === 'admin' && password === 'admin123') {
        res.json({
            success: true,
            user: { id: 1, username: 'admin', role: 'SUPERVISOR' },
            token: 'hardcoded-token-phase1'
        });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// --- Tests Module ---


/**
 * @swagger
 * /api/tests:
 *   get:
 *     tags: [Tests]
 *     summary: Get all tests (Pending & Completed)
 *     description: Retrieves a combined list of pending tests (from ListadosProduccion) and completed tests (from Prueba)
 *     responses:
 *       200:
 *         description: List of tests
 */
app.get('/api/tests', async (req, res) => {
    try {
        // 1. Pending Tests (ListadosProduccion)
        const pendingRaw = await prisma.listadosProduccion.findMany();
        const pendingTests = pendingRaw.map((p: any) => ({
            id: `pending-${p.id}`,
            status: 'PENDING',
            generalInfo: {
                pedido: p.Pedido,
                cliente: p.Cliente,
                modeloBomba: p.TipoDeBomba,
                ordenTrabajo: p.OrdenDeTrabajo,
                numeroBombas: p.NumeroBombas
            },
            createdAt: new Date().toISOString()
        }));

        // 2. Completed Tests (Prueba)
        const completedRaw = await prisma.prueba.findMany({
            include: {
                cliente: true,
                bomba: true
            },
            orderBy: {
                fecha: 'desc'
            }
        });

        const completedTests = completedRaw.map((p: any) => ({
            id: p.numeroprotocolo.toString(),
            status: 'COMPLETED',
            generalInfo: {
                pedido: p.bomba?.item || '',
                cliente: p.cliente?.nombre || '',
                modeloBomba: p.bomba?.tipobomba || '',
                ordenTrabajo: p.bomba?.OrdenDeTrabajo || '',
                numeroBombas: 1
            },
            createdAt: p.fecha.toISOString()
        }));

        res.json([...pendingTests, ...completedTests]);
    } catch (error) {
        logger.error('Error fetching tests:', error);
        res.status(500).json({ error: 'Failed to fetch tests' });
    }
});

/**
 * @swagger
 * /api/tests/{id}:
 *   get:
 *     tags: [Tests]
 *     summary: Get test by ID
 *     description: Retrieves details of a specific test. Standard ID for completed tests, 'pending-ID' for pending.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Test ID
 *     responses:
 *       200:
 *         description: Test details
 *       404:
 *         description: Test not found
 */
app.get('/api/tests/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (id.toString().startsWith('pending-')) {
            const dbId = parseInt(id.replace('pending-', ''));
            const p = await prisma.listadosProduccion.findUnique({ where: { id: dbId } });

            if (p) {
                res.json({
                    id: `pending-${p.id}`,
                    status: 'PENDING',
                    generalInfo: {
                        pedido: p.Pedido,
                        cliente: p.Cliente,
                        modeloBomba: p.TipoDeBomba,
                        ordenTrabajo: p.OrdenDeTrabajo,
                        numeroBombas: p.NumeroBombas
                    },
                    createdAt: new Date().toISOString()
                });
            } else {
                res.status(404).json({ error: 'Pending test not found' });
            }
        } else {
            const dbId = parseInt(id);
            const p = await prisma.prueba.findUnique({
                where: { numeroprotocolo: dbId },
                include: {
                    cliente: true,
                    bomba: true,
                    motor: true,
                    fluido: true,
                    detalles: true,
                    pruebaparametrovalor: true,
                    pruebaparametrocontinuo: true
                }
            });

            if (p) {
                res.json({
                    id: p.numeroprotocolo.toString(),
                    status: 'COMPLETED',
                    generalInfo: {
                        pedido: p.bomba?.item || '',
                        cliente: p.cliente?.nombre || '',
                        modeloBomba: p.bomba?.tipobomba || '',
                        ordenTrabajo: p.bomba?.OrdenDeTrabajo || '',
                        numeroBombas: 1
                    },
                    details: p, // Send full details for completed tests
                    createdAt: p.fecha.toISOString()
                });
            } else {
                res.status(404).json({ error: 'Test not found' });
            }
        }
    } catch (error) {
        logger.error('Error fetching test:', error);
        res.status(500).json({ error: 'Failed to fetch test' });
    }
});

// --- Import Module ---
import multer from 'multer';
import * as XLSX from 'xlsx';

const upload = multer({ storage: multer.memoryStorage() });

/**
 * @swagger
 * /api/excel/sheets:
 *   post:
 *     tags: [Import]
 *     summary: Get Excel sheet names
 *     description: Upload an Excel file to get available sheet names
 */
app.post('/api/excel/sheets', upload.single('file'), async (req: any, res: any) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const workbook = XLSX.read(req.file.buffer);
        const sheets = workbook.SheetNames;

        logger.info(`Excel sheets detected: ${sheets.join(', ')}`);
        res.json({ sheets, filename: req.file.originalname });

    } catch (error) {
        logger.error('Error reading Excel sheets:', error);
        res.status(500).json({ error: 'Failed to read Excel file' });
    }
});

/**
 * @swagger
 * /api/import-excel:
 *   post:
 *     tags: [Import]
 *     summary: Import tests from Excel
 *     description: Upload an Excel file to import test orders into ListadosProduccion
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Import successful
 */
app.post('/api/import-excel', upload.single('file'), async (req: any, res: any) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const workbook = XLSX.read(req.file.buffer);
        const sheetName = req.body.sheet || workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const rawData = XLSX.utils.sheet_to_json<string[]>(sheet, { header: 1 });
        const dataRows = rawData.slice(2);

        const newTests: any[] = [];

        for (const row of dataRows) {
            if (!row || row.length === 0) continue;

            const pedidoPosicion = String(row[1] || '').trim();
            const cliente = String(row[2] || '').trim();

            if (!pedidoPosicion && !cliente) continue;

            const modeloBomba = String(row[12] || '').trim();
            const ordenTrabajo = String(row[17] || '').trim();
            const numeroBombasRaw = row[20];

            const [pedido, posicion] = pedidoPosicion.includes('-')
                ? pedidoPosicion.split('-').map(s => s.trim())
                : [pedidoPosicion, ''];

            const numeroBombas = typeof numeroBombasRaw === 'number'
                ? numeroBombasRaw
                : parseInt(String(numeroBombasRaw || '1'), 10) || 1;

            newTests.push({
                id: `pending-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                status: 'PENDING',
                generalInfo: {
                    pedido,
                    posicion,
                    cliente,
                    modeloBomba,
                    ordenTrabajo,
                    numeroBombas
                },
                createdAt: new Date().toISOString()
            });
        }

        // Save to database (ListadosProduccion)
        await prisma.listadosProduccion.deleteMany(); // Clear existing pending tests

        await prisma.listadosProduccion.createMany({
            data: newTests.map((t: any) => ({
                Pedido: t.generalInfo.pedido,
                Cliente: t.generalInfo.cliente,
                TipoDeBomba: t.generalInfo.modeloBomba,
                OrdenDeTrabajo: t.generalInfo.ordenTrabajo,
                NumeroBombas: t.generalInfo.numeroBombas
            }))
        });

        logger.info(`Imported ${newTests.length} records from Excel`);
        res.json({ success: true, count: newTests.length });

    } catch (error) {
        logger.error('Excel import error:', error);
        res.status(500).json({ error: 'Failed to import Excel' });
    }
});

/**
 * @swagger
 * /api/import-csv:
 *   post:
 *     tags: [Import]
 *     summary: Import tests from CSV
 *     description: Upload a CSV file to import test orders into ListadosProduccion
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Import successful
 */
app.post('/api/import-csv', upload.single('file'), async (req: any, res: any) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const csvContent = req.file.buffer.toString('utf-8');
        const lines = csvContent.split('\n').filter((line: string) => line.trim());

        const records = lines.slice(1).map((line: string) => {
            const cols = line.split(',').map((c: string) => c.trim().replace(/"/g, ''));
            return {
                pedido: cols[0] || '',
                cliente: cols[1] || '',
                tipoDeBomba: cols[2] || '',
                ordenDeTrabajo: cols[3] || '',
                numeroBombas: parseInt(cols[4] || '1', 10) || 1
            };
        });

        interface CsvRecord {
            pedido: string;
            cliente: string;
            tipoDeBomba: string;
            ordenDeTrabajo: string;
            numeroBombas: number;
        }

        // Save to database
        await prisma.listadosProduccion.deleteMany(); // Clear existing
        await prisma.listadosProduccion.createMany({
            data: records.map((r: CsvRecord) => ({
                Pedido: r.pedido,
                Cliente: r.cliente,
                TipoDeBomba: r.tipoDeBomba,
                OrdenDeTrabajo: r.ordenDeTrabajo,
                NumeroBombas: r.numeroBombas
            }))
        });

        logger.info(`Imported ${records.length} records from CSV to database`);
        res.json({ success: true, count: records.length });

    } catch (error) {
        logger.error('CSV import error:', error);
        res.status(500).json({ error: 'Failed to import CSV' });
    }
});

/**
 * @swagger
 * /api/listados:
 *   get:
 *     tags: [Reports]
 *     summary: Get Listados Produccion
 *     description: Retrieves all raw records from ListadosProduccion table
 *     responses:
 *       200:
 *         description: List of production records
 */
app.get('/api/listados', async (req, res) => {
    try {
        const listados = await prisma.listadosProduccion.findMany();
        res.json(listados);
    } catch (error) {
        logger.error('Error fetching listados:', error);
        res.status(500).json({ error: 'Failed to fetch listados' });
    }
});

/**
 * @swagger
 * /api/reports/{id}:
 *   get:
 *     tags: [Reports]
 *     summary: Get Test Report
 *     description: Retrieves full details of a completed test for report generation
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Test Protocol Number (numeric)
 *     responses:
 *       200:
 *         description: Report details
 *       404:
 *         description: Report not found
 */
app.get('/api/reports/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const report = await prisma.prueba.findUnique({
            where: { numeroprotocolo: id },
            include: {
                cliente: true,
                bomba: true,
                motor: true,
                fluido: true,
                detalles: true,
                pruebaparametrovalor: true,
                pruebaparametrocontinuo: true
            }
        });

        if (report) {
            res.json(report);
        } else {
            res.status(404).json({ error: 'Report not found' });
        }
    } catch (error) {
        logger.error('Error fetching report:', error);
        res.status(500).json({ error: 'Failed to fetch report' });
    }
});

app.post('/api/reports/pdf', async (req, res) => {
    res.json({ message: 'PDF generation - Coming in Phase 2' });
});

import { PdfService } from './services/pdf.service';

app.post('/api/extract-pdf', upload.single('file'), async (req: any, res: any) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No PDF file uploaded' });
        }

        logger.info(`Extracting data from PDF: ${req.file.originalname}`);
        const specs = await PdfService.extractSpecs(req.file.buffer);

        res.json({
            success: true,
            metadata: {
                filename: req.file.originalname,
                size: req.file.size
            },
            data: specs
        });

    } catch (error) {
        logger.error('Error in PDF extraction endpoint:', error);
        res.status(500).json({ error: 'Failed to extract data from PDF' });
    }
});

app.listen(PORT, () => {
    logger.info(`🚀 Pump IoT API running on http://localhost:${PORT}`);
});

export default app;
