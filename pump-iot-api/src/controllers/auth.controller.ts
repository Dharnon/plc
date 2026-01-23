/**
 * @fileoverview Controlador de autenticación
 * @module controllers/auth
 */
import { Request, Response } from 'express';
import { generateToken } from '../middleware/auth';
import { logger } from '../utils/logger';

/**
 * Iniciar sesión
 * @route POST /api/auth/login
 */
export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    /**
     * TODO: Fase 2 - Implementar autenticación contra base de datos
     */

    // Credenciales hardcoded para Fase 1 (desarrollo)
    const validCredentials = [
        { username: 'admin', password: 'admin123', role: 'ADMIN' as const, id: 1 },
        { username: 'supervisor', password: 'super123', role: 'SUPERVISOR' as const, id: 2 },
        { username: 'operario', password: 'oper1234', role: 'OPERARIO' as const, id: 3 }
    ];

    const user = validCredentials.find(u => u.username === username);

    if (!user || user.password !== password) {
        logger.warn('Intento de login fallido', { username, ip: req.ip });
        return res.status(401).json({
            error: 'Authentication Failed',
            message: 'Usuario o contraseña incorrectos',
            code: 'INVALID_CREDENTIALS'
        });
    }

    // Generar token JWT
    const token = generateToken({
        userId: user.id,
        username: user.username,
        role: user.role
    });

    logger.info('Login exitoso', { userId: user.id, username: user.username });

    res.json({
        success: true,
        user: {
            id: user.id,
            username: user.username,
            role: user.role
        },
        token,
        expiresIn: process.env.JWT_EXPIRES_IN_SECONDS || 28800
    });
};
