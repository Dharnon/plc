/**
 * @fileoverview Controlador de importación de datos
 * @module controllers/import
 */
import { Request, Response } from 'express';
import * as XLSX from 'xlsx';
import { prisma } from '../lib/db';
import { logger } from '../utils/logger';

/**
 * Interfaz para registro de listado de producción
 */
interface ListadoRecord {
    pedido: string;
    posicion?: string;
    cliente: string;
    modeloBomba: string;
    ordenTrabajo: string;
    numeroBombas: number;
}

/**
 * Obtener hojas de Excel
 * @route POST /api/excel/sheets
 */
export const getExcelSheets = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'No se proporcionó ningún archivo',
            code: 'FILE_REQUIRED'
        });
    }

    const workbook = XLSX.read(req.file.buffer);
    const sheets = workbook.SheetNames;

    logger.info('Excel analizado', {
        filename: req.file.originalname,
        sheets: sheets.join(', ')
    });

    res.json({
        sheets,
        filename: req.file.originalname
    });
};

/**
 * Importar desde Excel
 * @route POST /api/import-excel
 */
export const importExcel = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'No se proporcionó ningún archivo Excel',
            code: 'FILE_REQUIRED'
        });
    }

    const workbook = XLSX.read(req.file.buffer);
    const sheetName = req.body.sheet || workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
        return res.status(400).json({
            error: 'Bad Request',
            message: `Hoja "${sheetName}" no encontrada en el archivo`,
            code: 'SHEET_NOT_FOUND'
        });
    }

    type ExcelRow = (string | number | undefined)[];
    const rawData = XLSX.utils.sheet_to_json<ExcelRow>(sheet, { header: 1 });
    const dataRows = rawData.slice(2); // Saltar headers

    const newTests: ListadoRecord[] = [];

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
            pedido,
            posicion,
            cliente,
            modeloBomba,
            ordenTrabajo,
            numeroBombas
        });
    }

    await prisma.listadosProduccion.deleteMany();

    await prisma.listadosProduccion.createMany({
        data: newTests.map((t) => ({
            Pedido: t.pedido,
            Cliente: t.cliente,
            TipoDeBomba: t.modeloBomba,
            OrdenDeTrabajo: t.ordenTrabajo,
            NumeroBombas: t.numeroBombas
        }))
    });

    logger.info('Excel importado', {
        filename: req.file.originalname,
        sheet: sheetName,
        records: newTests.length
    });

    res.json({
        success: true,
        count: newTests.length,
        message: `Se importaron ${newTests.length} registros correctamente`
    });
};

/**
 * Importar desde CSV
 * @route POST /api/import-csv
 */
export const importCsv = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'No se proporcionó ningún archivo CSV',
            code: 'FILE_REQUIRED'
        });
    }

    const csvContent = req.file.buffer.toString('utf-8');
    const lines = csvContent.split('\n').filter((line: string) => line.trim());

    interface CsvRecord {
        pedido: string;
        cliente: string;
        tipoDeBomba: string;
        ordenDeTrabajo: string;
        numeroBombas: number;
    }

    const records: CsvRecord[] = lines.slice(1).map((line: string) => {
        const cols = line.split(',').map((c: string) => c.trim().replace(/"/g, ''));
        return {
            pedido: cols[0] || '',
            cliente: cols[1] || '',
            tipoDeBomba: cols[2] || '',
            ordenDeTrabajo: cols[3] || '',
            numeroBombas: parseInt(cols[4] || '1', 10) || 1
        };
    });

    await prisma.listadosProduccion.deleteMany();

    await prisma.listadosProduccion.createMany({
        data: records.map((r) => ({
            Pedido: r.pedido,
            Cliente: r.cliente,
            TipoDeBomba: r.tipoDeBomba,
            OrdenDeTrabajo: r.ordenDeTrabajo,
            NumeroBombas: r.numeroBombas
        }))
    });

    logger.info('CSV importado', {
        filename: req.file.originalname,
        records: records.length
    });

    res.json({
        success: true,
        count: records.length,
        message: `Se importaron ${records.length} registros correctamente`
    });
};

/**
 * Listar importaciones
 * @route GET /api/listados
 */
export const getListados = async (req: Request, res: Response) => {
    const listados = await prisma.listadosProduccion.findMany({
        orderBy: { id: 'desc' }
    });

    logger.info('Listados consultados', { count: listados.length });

    res.json(listados);
};
