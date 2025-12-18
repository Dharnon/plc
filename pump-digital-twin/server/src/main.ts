
import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/generate-pdf', async (req, res) => {
    console.log('Generating PDF request received');
    const reportData = req.body;

    let browser;
    try {
        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        // 1. Navigate to the frontend report preview page
        // Assuming frontend is running on port 5173
        const frontendUrl = 'http://localhost:5173/report/preview';

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

app.listen(PORT, () => {
    console.log(`PDF Service running on http://localhost:${PORT}`);
});
