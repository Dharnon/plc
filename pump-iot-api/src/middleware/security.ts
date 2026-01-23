/**
 * @fileoverview Configuración de middleware de seguridad
 * @module middleware/security
 * @description Configura Helmet, Rate Limiting y otros middleware de seguridad
 * 
 * PROPÓSITO:
 * - Proteger contra ataques comunes (XSS, Clickjacking, MIME sniffing)
 * - Limitar tasa de requests para prevenir DDoS
 * - Agregar headers de seguridad HTTP
 * 
 * CUMPLIMIENTO:
 * - OWASP Top 10 mitigations
 * - Headers recomendados por security scanners
 */

import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { Express, Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

// ============================================================================
// HELMET - Headers de Seguridad HTTP
// ============================================================================

/**
 * Configuración de Helmet
 * @description Añade múltiples headers de seguridad HTTP
 * 
 * Headers configurados:
 * - X-Content-Type-Options: nosniff
 * - X-Frame-Options: DENY
 * - X-XSS-Protection: 0 (deprecated, CSP es mejor)
 * - Strict-Transport-Security (HSTS)
 * - Content-Security-Policy (CSP)
 */
export const helmetMiddleware = helmet({
    // Content Security Policy
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"], // Para Swagger UI
            scriptSrc: ["'self'", "'unsafe-inline'"], // Para Swagger UI
            imgSrc: ["'self'", "data:"],
            connectSrc: ["'self'"],
            fontSrc: ["'self'"],
            objectSrc: ["'none'"],
            frameAncestors: ["'none'"],
        },
    },
    // Prevenir clickjacking
    frameguard: { action: 'deny' },
    // HSTS (solo en producción con HTTPS)
    hsts: process.env.NODE_ENV === 'production' ? {
        maxAge: 31536000, // 1 año
        includeSubDomains: true,
        preload: true
    } : false,
    // Prevenir MIME sniffing
    noSniff: true,
    // Esconder header X-Powered-By
    hidePoweredBy: true,
});

// ============================================================================
// RATE LIMITING - Protección contra DDoS
// ============================================================================

/**
 * Rate limiter global
 * @description Limita requests por IP para prevenir abuso
 * 
 * Configuración:
 * - 100 requests por ventana de 15 minutos
 * - Aplica a todas las rutas
 * - Respuesta 429 cuando se excede
 */
export const globalRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // 100 requests por ventana
    message: {
        error: 'Too Many Requests',
        message: 'Demasiadas solicitudes. Por favor, espere antes de continuar.',
        code: 'RATE_LIMIT_EXCEEDED',
        retryAfter: '15 minutos'
    },
    standardHeaders: true, // Incluir headers RateLimit-* estándar
    legacyHeaders: false, // Deshabilitar X-RateLimit-* headers antiguos
    handler: (req: Request, res: Response) => {
        logger.warn('Rate limit excedido', {
            ip: req.ip,
            path: req.path,
            method: req.method
        });
        res.status(429).json({
            error: 'Too Many Requests',
            message: 'Demasiadas solicitudes. Por favor, espere antes de continuar.',
            code: 'RATE_LIMIT_EXCEEDED'
        });
    }
});

/**
 * Rate limiter estricto para endpoints de autenticación
 * @description Límite más agresivo para prevenir brute force
 * 
 * Configuración:
 * - 5 intentos por ventana de 15 minutos
 * - Solo para /api/auth/*
 */
export const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 5, // Solo 5 intentos de login
    message: {
        error: 'Too Many Attempts',
        message: 'Demasiados intentos de autenticación. Cuenta bloqueada temporalmente.',
        code: 'AUTH_RATE_LIMIT_EXCEEDED',
        retryAfter: '15 minutos'
    },
    skipSuccessfulRequests: true, // No contar requests exitosos
    handler: (req: Request, res: Response) => {
        logger.error('Posible ataque de fuerza bruta detectado', {
            ip: req.ip,
            path: req.path
        });
        res.status(429).json({
            error: 'Too Many Attempts',
            message: 'Demasiados intentos de autenticación. Intente de nuevo en 15 minutos.',
            code: 'AUTH_RATE_LIMIT_EXCEEDED'
        });
    }
});

// ============================================================================
// MIDDLEWARE DE LOGGING DE REQUESTS
// ============================================================================

/**
 * Logger de requests HTTP
 * @description Registra cada request entrante para auditoría
 */
export function requestLogger(req: Request, res: Response, next: NextFunction): void {
    const startTime = Date.now();

    // Hook para cuando termine el response
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        const logData = {
            method: req.method,
            path: req.path,
            status: res.statusCode,
            duration: `${duration}ms`,
            ip: req.ip,
            userAgent: req.get('user-agent')?.substring(0, 100)
        };

        if (res.statusCode >= 400) {
            logger.warn('Request fallido', logData);
        } else {
            logger.info('Request completado', logData);
        }
    });

    next();
}

// ============================================================================
// FUNCIÓN DE SETUP
// ============================================================================

/**
 * Configura todos los middleware de seguridad en la app
 * @param app - Instancia de Express
 * 
 * @example
 * const app = express();
 * setupSecurityMiddleware(app);
 */
export function setupSecurityMiddleware(app: Express): void {
    // Headers de seguridad
    app.use(helmetMiddleware);

    // Rate limiting global
    app.use(globalRateLimiter);

    // Rate limiting específico para auth
    app.use('/api/auth', authRateLimiter);

    // Logger de requests
    app.use(requestLogger);

    logger.info('Middleware de seguridad configurado correctamente');
}
