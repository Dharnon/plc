import * as XLSX from 'xlsx';
import type { TestRequest, GeneralInfo } from '@/types';

export const excelService = {
    // Read file and return workbook object
    readWorkbook: async (file: File): Promise<XLSX.WorkBook> => {
        const data = await file.arrayBuffer();
        return XLSX.read(data);
    },

    // Get list of sheet names (Pestañas)
    getWorksheetNames: (workbook: XLSX.WorkBook): string[] => {
        return workbook.SheetNames;
    },

    // Parse a specific sheet and map to TestRequest structure
    // Skips first 2 rows (header area)
    // Columns: B (PEDIDO-POSICIÓN), C (CLIENTE), M (MODELO DE BOMBA), R (ORDEN DE TRABAJO), U (NUMERO DE BOMBAS)
    parseSheet: (workbook: XLSX.WorkBook, sheetName: string): TestRequest[] => {
        const sheet = workbook.Sheets[sheetName];

        // Convert to JSON, skipping the first 2 rows (header: 1 means use row 1 as header, but we want row 3 as data)
        // We use header: 1 to get raw array, then process manually
        const rawData = XLSX.utils.sheet_to_json<string[]>(sheet, { header: 1 });

        // Skip first 2 rows (index 0 and 1)
        const dataRows = rawData.slice(2);

        const tests: TestRequest[] = [];

        for (let i = 0; i < dataRows.length; i++) {
            const row = dataRows[i];
            if (!row || row.length === 0) continue;

            // Column indices (0-based): B=1, C=2, M=12, R=17, U=20
            const pedidoPosicion = String(row[1] || '').trim();
            const cliente = String(row[2] || '').trim();
            const modeloBomba = String(row[12] || '').trim();
            const ordenTrabajo = String(row[17] || '').trim();
            const numeroBombasRaw = row[20];

            // Skip empty rows
            if (!pedidoPosicion && !cliente) continue;

            // Split PEDIDO-POSICIÓN by hyphen
            const [pedido, posicion] = pedidoPosicion.includes('-')
                ? pedidoPosicion.split('-').map(s => s.trim())
                : [pedidoPosicion, ''];

            // Parse number of pumps
            const numeroBombas = typeof numeroBombasRaw === 'number'
                ? numeroBombasRaw
                : parseInt(String(numeroBombasRaw || '1'), 10) || 1;

            const generalInfo: GeneralInfo = {
                pedido,
                posicion,
                cliente,
                modeloBomba,
                ordenTrabajo,
                numeroBombas,
            };

            tests.push({
                id: `${pedido}-${posicion}-${i}`,
                status: 'PENDING_PDF',
                generalInfo,
                createdAt: new Date().toISOString(),
            });
        }

        return tests;
    }
};
