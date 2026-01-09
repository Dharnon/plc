import winston from 'winston';
import dotenv from 'dotenv';

// Load environment variables (just in case it's used independently)
dotenv.config();

export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        // Production: Add file transport
        ...(process.env.NODE_ENV === 'production' ? [
            new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
            new winston.transports.File({ filename: 'logs/combined.log' })
        ] : [])
    ]
});

export default logger;
