/**
 * @fileoverview Middleware centralizado de manejo de errores
 * @module middleware/errorHandler
 * @description Captura todos los errores no manejados y devuelve respuestas consistentes
 * 
 * PROPÓSITO:
 * - Evitar que stack traces se expongan al cliente en producción
 * - Logging consistente de todos los errores
 * - Respuestas de error estandarizadas (RFC 7807)
 * - Distinción entre errores operacionales y de programación
 */

import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { logger } from '../utils/logger';

// ============================================================================
// TIPOS DE ERROR PERSONALIZADOS
// ============================================================================

/**
 * Error operacional conocido
 * @description Errores esperados que deben comunicarse al cliente
 */
export class AppError extends Error {
    public readonly statusCode: number;
    public readonly isOperational: boolean;
    public readonly code: string;

    constructor(
        message: string,
        statusCode: number = 500,
        code: string = 'INTERNAL_ERROR'
    ) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        this.code = code;

        // Capturar stack trace sin incluir el constructor
        Error.captureStackTrace(this, this.constructor);
    }
}

/**
 * Error de autenticación
 */
export class AuthenticationError extends AppError {
    constructor(message: string = 'Credenciales inválidas') {
        super(message, 401, 'AUTHENTICATION_ERROR');
    }
}

/**
 * Error de autorización
 */
export class AuthorizationError extends AppError {
    constructor(message: string = 'No tiene permisos para esta acción') {
        super(message, 403, 'AUTHORIZATION_ERROR');
    }
}

/**
 * Error de recurso no encontrado
 */
export class NotFoundError extends AppError {
    constructor(resource: string = 'Recurso') {
        super(`${resource} no encontrado`, 404, 'NOT_FOUND');
    }
}

/**
 * Error de validación
 */
export class ValidationError extends AppError {
    public readonly details: Record<string, string>[];

    constructor(message: string, details: Record<string, string>[] = []) {
        super(message, 400, 'VALIDATION_ERROR');
        this.details = details;
    }
}

// ============================================================================
// MIDDLEWARE DE MANEJO DE ERRORES
// ============================================================================

/**
 * Estructura de respuesta de error (RFC 7807 Problem Details)
 */
interface ErrorResponse {
    error: string;
    message: string;
    code: string;
    timestamp: string;
    path: string;
    details?: unknown;
    stack?: string;
}

/**
 * Middleware principal de manejo de errores
 * @description Debe registrarse DESPUÉS de todas las rutas
 * 
 * @example
 * // En main.ts, al final:
 * app.use(errorHandler);
 */
export const errorHandler: ErrorRequestHandler = (
    err: Error | AppError,
    req: Request,
    res: Response,
    _next: NextFunction
): void => {
    // Determinar si es un error conocido o inesperado
    const isAppError = err instanceof AppError;
    const statusCode = isAppError ? (err as AppError).statusCode : 500;
    const code = isAppError ? (err as AppError).code : 'INTERNAL_SERVER_ERROR';

    // Log del error
    if (statusCode >= 500) {
        logger.error('Error interno del servidor:', {
            message: err.message,
            stack: err.stack,
            path: req.path,
            method: req.method,
            ip: req.ip
        });
    } else {
        logger.warn('Error de cliente:', {
            message: err.message,
            code,
            path: req.path,
            method: req.method
        });
    }

    // Construir respuesta
    const response: ErrorResponse = {
        error: statusCode >= 500 ? 'Internal Server Error' : err.name,
        message: isAppError ? err.message : 'Ha ocurrido un error inesperado',
        code,
        timestamp: new Date().toISOString(),
        path: req.path
    };

    // Incluir detalles adicionales si existen
    if (err instanceof ValidationError && err.details) {
        response.details = err.details;
    }

    // En desarrollo, incluir stack trace
    if (process.env.NODE_ENV !== 'production' && err.stack) {
        response.stack = err.stack;
    }

    res.status(statusCode).json(response);
};

/**
 * Middleware para rutas no encontradas (404)
 * @description Debe registrarse ANTES del errorHandler
 */
export const notFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
    next(new NotFoundError(`Ruta ${req.method} ${req.path}`));
};

/**
 * Wrapper para async handlers
 * @description Captura errores de funciones async y los pasa al errorHandler
 * 
 * @example
 * app.get('/users', asyncHandler(async (req, res) => {
 *     const users = await getUsers();
 *     res.json(users);
 * }));
 */
export const asyncHandler = (
    fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>
) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
