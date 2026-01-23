/**
 * @fileoverview Controlador de reportes
 * @module controllers/reports
 */
import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { logger } from '../utils/logger';
import { PdfService } from '../services/pdf.service';
import { NotFoundError } from '../middleware/errorHandler';

/**
 * Obtener reporte completo de prueba
 * @route GET /api/reports/:id
 */
export const getReportById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const report = await prisma.prueba.findUnique({
        where: { numeroprotocolo: id },
        include: {
            cliente: true,
            bomba: true,
            motor: true,
            fluido: true,
            detalles: true,
            banco: true,
            pruebaparametrovalor: {
                include: {
                    parametro: {
                        include: {
                            unidad: true
                        }
                    }
                }
            },
            pruebaparametrocontinuo: true
        }
    });

    if (!report) {
        throw new NotFoundError('Reporte');
    }

    logger.info('Reporte consultado', { protocolo: id });

    res.json(report);
};

/**
 * Generar PDF de reporte (Fase 2)
 * @route POST /api/reports/pdf
 */
export const generateReportPdf = async (req: Request, res: Response) => {
    // TODO: Fase 2 - Implementar generación de PDF con Puppeteer
    res.json({
        message: 'PDF generation - Disponible en Fase 2',
        status: 'not_implemented'
    });
};

/**
 * Extraer especificaciones de PDF
 * @route POST /api/extract-pdf
 */
export const extractPdfSpecs = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'No se proporcionó ningún archivo PDF',
            code: 'FILE_REQUIRED'
        });
    }

    logger.info('Extrayendo datos de PDF', {
        filename: req.file.originalname,
        size: req.file.size
    });

    const specs = await PdfService.extractSpecs(req.file.buffer);

    res.json({
        success: true,
        metadata: {
            filename: req.file.originalname,
            size: req.file.size,
            extractedAt: new Date().toISOString()
        },
        data: specs
    });
};
