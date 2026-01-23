/**
 * @fileoverview Middleware de autenticación JWT
 * @module middleware/auth
 * @description Verifica tokens JWT y protege rutas que requieren autenticación
 * 
 * PROPÓSITO:
 * - Validar tokens JWT en requests protegidos
 * - Extraer información del usuario del token
 * - Prevenir acceso no autorizado
 * 
 * SEGURIDAD:
 * - Tokens firmados con HS256 (simétrico) o RS256 (asimétrico)
 * - Expiración configurable (default 8h)
 * - Blacklist de tokens revocados (futuro)
 */

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticationError, AuthorizationError } from './errorHandler';
import { logger } from '../utils/logger';

// ============================================================================
// CONFIGURACIÓN
// ============================================================================

/**
 * Secreto para firmar tokens
 * @security Debe ser una cadena aleatoria de al menos 32 caracteres
 */
const JWT_SECRET = process.env.JWT_SECRET || 'CAMBIAR_EN_PRODUCCION_32_CHARS_MIN';

/**
 * Tiempo de expiración de tokens en segundos
 * 8 horas = 8 * 60 * 60 = 28800 segundos
 */
const JWT_EXPIRES_IN_SECONDS = parseInt(process.env.JWT_EXPIRES_IN_SECONDS || '28800', 10);

// ============================================================================
// TIPOS
// ============================================================================

/**
 * Roles de usuario disponibles
 */
export type UserRole = 'OPERARIO' | 'SUPERVISOR' | 'ADMIN';

/**
 * Payload del token JWT
 */
export interface JwtPayload {
    userId: number;
    username: string;
    role: UserRole;
    iat?: number;
    exp?: number;
}

/**
 * Extensión del Request de Express con usuario autenticado
 */
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}

// ============================================================================
// FUNCIONES DE UTILIDAD
// ============================================================================

/**
 * Genera un token JWT para un usuario
 * @param payload - Datos del usuario a incluir en el token
 * @returns Token JWT firmado
 * 
 * @example
 * const token = generateToken({ userId: 1, username: 'admin', role: 'ADMIN' });
 */
export function generateToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
    const options: jwt.SignOptions = {
        expiresIn: JWT_EXPIRES_IN_SECONDS
    };
    return jwt.sign(payload as object, JWT_SECRET, options);
}

/**
 * Verifica y decodifica un token JWT
 * @param token - Token a verificar
 * @returns Payload decodificado o null si es inválido
 */
export function verifyToken(token: string): JwtPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as JwtPayload;
    } catch (error) {
        return null;
    }
}

// ============================================================================
// MIDDLEWARES
// ============================================================================

/**
 * Middleware de autenticación
 * @description Verifica que el request tenga un token JWT válido
 * Extrae el token del header Authorization: Bearer <token>
 * 
 * @throws {AuthenticationError} Si no hay token o es inválido
 * 
 * @example
 * // Proteger una ruta
 * app.get('/api/protected', authenticate, (req, res) => {
 *     console.log(req.user); // { userId: 1, username: 'admin', role: 'ADMIN' }
 * });
 */
export function authenticate(req: Request, res: Response, next: NextFunction): void {
    // Extraer token del header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new AuthenticationError('Token de autenticación requerido');
    }

    const token = authHeader.substring(7); // Remover "Bearer "

    // Verificar token
    const payload = verifyToken(token);

    if (!payload) {
        logger.warn('Intento de acceso con token inválido', {
            ip: req.ip,
            path: req.path
        });
        throw new AuthenticationError('Token inválido o expirado');
    }

    // Adjuntar usuario al request
    req.user = payload;

    logger.info('Usuario autenticado', {
        userId: payload.userId,
        username: payload.username,
        path: req.path
    });

    next();
}

/**
 * Factory para middleware de autorización por roles
 * @param allowedRoles - Roles que tienen acceso a la ruta
 * @returns Middleware que verifica el rol del usuario
 * 
 * @example
 * // Solo supervisores y admins pueden acceder
 * app.delete('/api/tests/:id', 
 *     authenticate, 
 *     authorize(['SUPERVISOR', 'ADMIN']), 
 *     deleteTest
 * );
 */
export function authorize(allowedRoles: UserRole[]) {
    return (req: Request, res: Response, next: NextFunction): void => {
        if (!req.user) {
            throw new AuthenticationError('Usuario no autenticado');
        }

        if (!allowedRoles.includes(req.user.role)) {
            logger.warn('Intento de acceso no autorizado', {
                userId: req.user.userId,
                userRole: req.user.role,
                requiredRoles: allowedRoles,
                path: req.path
            });
            throw new AuthorizationError(
                `Esta acción requiere rol: ${allowedRoles.join(' o ')}`
            );
        }

        next();
    };
}

/**
 * Middleware opcional de autenticación
 * @description Intenta autenticar pero no falla si no hay token
 * Útil para rutas que tienen comportamiento diferente para usuarios logueados
 */
export function optionalAuth(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7);
        const payload = verifyToken(token);

        if (payload) {
            req.user = payload;
        }
    }

    next();
}
