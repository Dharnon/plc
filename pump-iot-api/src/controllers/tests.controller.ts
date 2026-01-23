/**
 * @fileoverview Controlador de pruebas (Tests)
 * @module controllers/tests
 */
import { Request, Response } from 'express';
import { prisma } from '../lib/db';
import { logger } from '../utils/logger';
import { NotFoundError } from '../middleware/errorHandler';

/**
 * Interfaz para prueba mapeada
 */
interface MappedTest {
    id: string;
    status: 'PENDING' | 'COMPLETED';
    generalInfo: {
        pedido: string | null;
        cliente: string | null;
        modeloBomba: string | null;
        ordenTrabajo: string | null;
        numeroBombas: number | null;
    };
    createdAt: string;
}

/**
 * Listar todas las pruebas
 * @route GET /api/tests
 */
export const getTests = async (req: Request, res: Response) => {
    // 1. Obtener pruebas PENDIENTES
    const pendingRaw = await prisma.listadosProduccion.findMany();

    const pendingTests: MappedTest[] = pendingRaw.map((p) => ({
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

    // 2. Obtener pruebas COMPLETADAS
    const completedRaw = await prisma.prueba.findMany({
        include: {
            cliente: true,
            bomba: true
        },
        orderBy: {
            fecha: 'desc'
        }
    });

    const completedTests: MappedTest[] = completedRaw.map((p) => ({
        id: p.numeroprotocolo.toString(),
        status: 'COMPLETED',
        generalInfo: {
            pedido: p.bomba?.item || null,
            cliente: p.cliente?.nombre || null,
            modeloBomba: p.bomba?.tipobomba || null,
            ordenTrabajo: p.bomba?.OrdenDeTrabajo || null,
            numeroBombas: 1
        },
        createdAt: p.fecha.toISOString()
    }));

    logger.info('Tests consultados', {
        pending: pendingTests.length,
        completed: completedTests.length
    });

    res.json([...pendingTests, ...completedTests]);
};

/**
 * Obtener detalle de una prueba
 * @route GET /api/tests/:id
 */
export const getTestById = async (req: Request, res: Response) => {
    const { id } = req.params;

    // Caso A: Prueba PENDIENTE
    if (id.startsWith('pending-')) {
        const dbId = parseInt(id.replace('pending-', ''));

        const pending = await prisma.listadosProduccion.findUnique({
            where: { id: dbId }
        });

        if (!pending) {
            throw new NotFoundError('Prueba pendiente');
        }

        return res.json({
            id: `pending-${pending.id}`,
            status: 'PENDING',
            generalInfo: {
                pedido: pending.Pedido,
                cliente: pending.Cliente,
                modeloBomba: pending.TipoDeBomba,
                ordenTrabajo: pending.OrdenDeTrabajo,
                numeroBombas: pending.NumeroBombas
            },
            createdAt: new Date().toISOString()
        });
    }

    // Caso B: Prueba COMPLETADA
    const dbId = parseInt(id);

    const prueba = await prisma.prueba.findUnique({
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

    if (!prueba) {
        throw new NotFoundError('Prueba');
    }

    res.json({
        id: prueba.numeroprotocolo.toString(),
        status: 'COMPLETED',
        generalInfo: {
            pedido: prueba.bomba?.item || '',
            cliente: prueba.cliente?.nombre || '',
            modeloBomba: prueba.bomba?.tipobomba || '',
            ordenTrabajo: prueba.bomba?.OrdenDeTrabajo || '',
            numeroBombas: 1
        },
        details: prueba,
        createdAt: prueba.fecha.toISOString()
    });
};
