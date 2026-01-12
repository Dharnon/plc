import * as pdfjsLib from 'pdfjs-dist';

// Configurar el worker para Next.js
// Usamos un CDN para evitar problemas con la carga de archivos locales del worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

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

export async function extractSpecsFromPdf(file: File): Promise<ExtractedSpecs> {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        let fullText = '';

        // Leer todas las páginas (normalmente es 1 o 2)
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();

            // Improved text extraction: Group by vertical position (Y) to reconstruct rows (lines)
            const items = textContent.items as any[];

            // Group items into lines based on Y coordinate (with tolerance)
            const yTolerance = 5;
            const rows: Record<number, { x: number; str: string }[]> = {};

            items.forEach(item => {
                const y = Math.round(item.transform[5]);
                const x = item.transform[4];
                const str = item.str;

                // Find existing row within tolerance
                const existingY = Object.keys(rows).map(Number).find(key => Math.abs(key - y) < yTolerance);

                if (existingY !== undefined) {
                    rows[existingY].push({ x, str });
                } else {
                    rows[y] = [{ x, str }];
                }
            });

            // Sort rows by Y (Desc for PDF usually, top to bottom is High Y to Low Y)
            const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a);

            for (const y of sortedYs) {
                // Sort items in row by X (Left to Right)
                const rowItems = rows[y].sort((a, b) => a.x - b.x);
                const rowText = rowItems.map(i => i.str).join(' ');
                fullText += rowText + '\n';
            }
        }

        console.log("Texto extraído del PDF:", fullText); // Para depuración

        return parseTextToSpecs(fullText);
    } catch (error) {
        console.error("Error al extraer texto del PDF:", error);
        throw new Error("No se pudo leer el PDF. Asegúrese de que no sea una imagen escaneada.");
    }
}

function parseTextToSpecs(text: string): ExtractedSpecs {
    const specs: ExtractedSpecs = {};

    // Helper para extraer números con regex
    const extractNumber = (patterns: RegExp[]): number | undefined => {
        for (const pattern of patterns) {
            const match = text.match(pattern);
            if (match && match[1]) {
                // Limpiar el número (quitar comas de miles si las hay, convertir coma decimal si es necesario)
                let numStr = match[1].replace(/,/g, ''); // Asumimos punto decimal por ahora o formato US
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

    // --- Regex patterns basados en el formato Flowserve (DATASHEET) ---

    // Caudal (Capacity)
    // Busca "Capacity (rated/normal) : 10.7"
    specs.flowRate = extractNumber([
        /Capacity\s*\(.*?\)\s*:\s*([\d.]+)/i,
        /Flow\s*:\s*([\d.]+)/i
    ]);

    // TDH (Total developed head)
    specs.head = extractNumber([
        /Total developed head\s*:\s*([\d.]+)/i,
        /Head\s*:\s*([\d.]+)/i
    ]);

    // RPM
    specs.rpm = extractNumber([
        /Pump speed\s*:\s*([\d,]+)/i,
        /Speed\s*:\s*([\d,]+)/i
    ]);

    // Potencia (Rated brake power)
    specs.maxPower = extractNumber([
        /Rated brake power\s*:\s*([\d.]+)/i,
        /Power\s*:\s*([\d.]+)\s*kW/i
    ]);

    // Eficiencia
    specs.efficiency = extractNumber([
        /Pump overall efficiency\s*\(.*?\)\s*:\s*([\d.]+)/i,
        /Efficiency\s*:\s*([\d.]+)/i
    ]);

    // NPSHr
    specs.npshr = extractNumber([
        /NPSH required\s*\(.*?\)\s*:\s*([\d.]+)/i,
        /NPSHr\s*:\s*([\d.]+)/i
    ]);

    // Q Min
    specs.qMin = extractNumber([
        /Minimum continuous flow\s*:\s*([\d.]+)/i
    ]);

    // Q BEP
    specs.bepFlow = extractNumber([
        /Flow at BEP\s*:\s*([\d.]+)/i
    ]);

    // Temp
    specs.temperature = extractNumber([
        /Temperature\s*:\s*([\d.]+)/i
    ]);

    // Viscosidad
    specs.viscosity = extractNumber([
        /Viscosity\s*\/.*?\s*:\s*([\d.]+)/i
    ]);

    // Densidad
    specs.density = extractNumber([
        /Density\s*\/.*?\s*:\s*.*?\/\s*([\d.]+)/i, // Matches "... : - / 1000"
        /Density\s*:\s*([\d.]+)/i
    ]);

    // Diametro Impulsor
    specs.impellerDiameter = extractNumber([
        /Rated\s*:\s*([\d.]+)\s*mm/i, // Busca "Rated : 140 mm" bajo la columna diameter
        /Impeller diameter\s*:\s*([\d.]+)/i
    ]);

    // Tolerancia
    specs.tolerance = extractString([
        /Test tolerance\s*:\s*([^:\n]+)/i
    ]);

    // Seal
    // Fix: capture until newline or specific keywords, but limit length to 50 chars to prevent run-on.
    specs.sealType = extractString([
        /Seal configuration\s*:\s*(.{1,50}?)(?=\s+(?:Performance|Hydraulic|Liquid|Construction|Materials|Driver|Motor|$))/i,
        /Seal configuration\s*:\s*([^:\n]{1,50})/i,
        /Shaft Sealing\s*:\s*([^:\n]{1,50})/i
    ]);

    // Suction / Discharge
    // Fix: Use dot-wildcard with strictly limited length (40 chars) to skip "Size", "Nozzle", etc., without jumping sections.
    // Handles columns being mashed together or headers appearing in between.
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
