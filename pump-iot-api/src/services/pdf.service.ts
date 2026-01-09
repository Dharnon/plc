import { logger } from '../utils/logger';

export interface ExtractedSpecs {
    flowRate?: number;
    head?: number;
    rpm?: number;
    maxPower?: number;
    efficiency?: number;
    npshr?: number;
    qMin?: number;
    bepFlow?: number;
    temperature?: number;
    viscosity?: number;
    density?: number;
    impellerDiameter?: number;
    suctionDiameter?: number;
    dischargeDiameter?: number;
    tolerance?: string;
    sealType?: string;
}

export const PdfService = {
    extractSpecs: async (fileBuffer: Buffer): Promise<ExtractedSpecs> => {
        try {
            const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
            const data = new Uint8Array(fileBuffer);

            const loadingTask = pdfjsLib.getDocument({
                data,
                standardFontDataUrl: 'node_modules/pdfjs-dist/standard_fonts/',
                disableFontFace: true,
            });

            const pdf = await loadingTask.promise;
            let fullText = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const items = textContent.items as any[];

                const yTolerance = 5;
                const rows: Record<number, { x: number; str: string }[]> = {};

                items.forEach(item => {
                    const y = Math.round(item.transform[5]);
                    const x = item.transform[4];
                    const str = item.str;

                    const existingY = Object.keys(rows).map(Number).find(key => Math.abs(key - y) < yTolerance);

                    if (existingY !== undefined) {
                        rows[existingY].push({ x, str });
                    } else {
                        rows[y] = [{ x, str }];
                    }
                });

                const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a);

                for (const y of sortedYs) {
                    const rowItems = rows[y].sort((a, b) => a.x - b.x);
                    const rowText = rowItems.map(i => i.str).join(' ');
                    fullText += rowText + '\n';
                }
            }

            logger.info('PDF parsed successfully, extracting specs...');
            return parseTextToSpecs(fullText);

        } catch (error) {
            logger.error('Error extracting text from PDF:', error);
            throw new Error('Failed to parse PDF file');
        }
    }
};

function parseTextToSpecs(text: string): ExtractedSpecs {
    const specs: ExtractedSpecs = {};

    const extractNumber = (patterns: RegExp[]): number | undefined => {
        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match && match[1]) {
                const numStr = match[1].replace(/,/g, '');
                return parseFloat(numStr);
            }
        }
        return undefined;
    };

    const extractString = (patterns: RegExp[]): string | undefined => {
        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match && match[1]) {
                return match[1].trim();
            }
        }
        return undefined;
    };

    specs.flowRate = extractNumber([
        /Capacity\s*\(.*?\)\s*:\s*([\d.]+)/i,
        /Flow\s*:\s*([\d.]+)/i
    ]);

    specs.head = extractNumber([
        /Total developed head\s*:\s*([\d.]+)/i,
        /Head\s*:\s*([\d.]+)/i
    ]);

    specs.rpm = extractNumber([
        /Pump speed\s*:\s*([\d,]+)/i,
        /Speed\s*:\s*([\d,]+)/i
    ]);

    specs.maxPower = extractNumber([
        /Rated brake power\s*:\s*([\d.]+)/i,
        /Power\s*:\s*([\d.]+)\s*kW/i
    ]);

    specs.efficiency = extractNumber([
        /Pump overall efficiency\s*\(.*?\)\s*:\s*([\d.]+)/i,
        /Efficiency\s*:\s*([\d.]+)/i
    ]);

    specs.npshr = extractNumber([
        /NPSH required\s*\(.*?\)\s*:\s*([\d.]+)/i,
        /NPSHr\s*:\s*([\d.]+)/i
    ]);

    specs.qMin = extractNumber([
        /Minimum continuous flow\s*:\s*([\d.]+)/i
    ]);

    specs.bepFlow = extractNumber([
        /Flow at BEP\s*:\s*([\d.]+)/i
    ]);

    specs.temperature = extractNumber([
        /Temperature\s*:\s*([\d.]+)/i
    ]);

    specs.viscosity = extractNumber([
        /Viscosity\s*\/.*?\s*:\s*([\d.]+)/i
    ]);

    specs.density = extractNumber([
        /Density\s*\/.*?\s*:\s*.*?\/\s*([\d.]+)/i,
        /Density\s*:\s*([\d.]+)/i
    ]);

    specs.impellerDiameter = extractNumber([
        /Rated\s*:\s*([\d.]+)\s*mm/i,
        /Impeller diameter\s*:\s*([\d.]+)/i
    ]);

    specs.tolerance = extractString([
        /Test tolerance\s*:\s*([^:\n]+)/i
    ]);

    specs.sealType = extractString([
        /Seal configuration\s*:\s*(.{1,50}?)(?=\s+(?:Performance|Hydraulic|Liquid|Construction|Materials|Driver|Motor|$))/i,
        /Seal configuration\s*:\s*([^:\n]{1,50})/i,
        /Shaft Sealing\s*:\s*([^:\n]{1,50})/i
    ]);

    specs.suctionDiameter = extractNumber([
        /Suction.{0,40}?(\d+(?:\.\d+)?)\s*mm/i,
        /Suction\s+Size.{0,20}?(\d+(?:\.\d+)?)\s*mm/i
    ]);

    specs.dischargeDiameter = extractNumber([
        /Discharge.{0,40}?(\d+(?:\.\d+)?)\s*mm/i,
        /Discharge\s+Size.{0,20}?(\d+(?:\.\d+)?)\s*mm/i
    ]);

    return specs;
}
