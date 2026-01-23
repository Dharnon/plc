/**
 * @fileoverview Pump IoT Platform - API Server
 * @module main
 * @description Express REST API para gestión de bancos de pruebas de bombas hidráulicas
 * 
 * @version 1.0.0
 * @author Flowserve IoT Team
 * @license ISC
 */

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

// Importar módulos internos
import { logger } from './utils/logger';
import routes from './routes'; // Importar router principal

// Importar middleware de seguridad
import {
    setupSecurityMiddleware,
    errorHandler,
    notFoundHandler,
} from './middleware';

// ============================================================================
// CONFIGURACIÓN
// ============================================================================

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// ============================================================================
// SWAGGER/OPENAPI CONFIGURATION
// ============================================================================

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pump IoT Platform API',
            version: '1.0.0',
            description: 'REST API para gestión de pruebas hidráulicas en bancos de ensayo industrial.',
            contact: {
                name: 'Flowserve IoT Team',
                email: 'iot@flowserve.com'
            }
        },
        servers: [
            { url: `http://localhost:${PORT}`, description: 'Desarrollo Local' }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ['./src/routes/*.ts', './src/controllers/*.ts']
};

// ============================================================================
// MIDDLEWARE SETUP
// ============================================================================

setupSecurityMiddleware(app);

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(compression());
app.use(express.json({ limit: '10mb' }));

if (NODE_ENV !== 'production') {
    const swaggerSpec = swaggerJsdoc(swaggerOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: 'Pump IoT API Docs'
    }));
    logger.info('📚 Swagger UI habilitado en /api-docs');
}

// ============================================================================
// ROUTES MOUNTING
// ============================================================================

// Información de la API (Root)
app.get('/', (req: Request, res: Response) => {
    res.json({
        name: 'Pump IoT Platform API',
        version: '1.0.0',
        environment: NODE_ENV,
        docs: NODE_ENV !== 'production' ? '/api-docs' : null
    });
});

// Montar todas las rutas de API bajo /api
app.use('/api', routes);

// ============================================================================
// ERROR HANDLING
// ============================================================================

app.use(notFoundHandler);
app.use(errorHandler);

// ============================================================================
// SERVER STARTUP
// ============================================================================

app.listen(PORT, () => {
    logger.info('═══════════════════════════════════════════════════════════');
    logger.info(`Pump IoT API iniciada correctamente`);
    logger.info(`URL: http://localhost:${PORT}`);
    logger.info(`Docs: http://localhost:${PORT}/api-docs`);
    logger.info(`Entorno: ${NODE_ENV}`);
    logger.info('═══════════════════════════════════════════════════════════');
});

export default app;
