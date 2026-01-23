/**
 * @fileoverview Esquemas de validación Zod para todos los endpoints de la API
 * @module middleware/validation
 * @description Validación type-safe de requests entrantes usando Zod v4
 * @see https://zod.dev
 * 
 * PROPÓSITO:
 * - Prevenir inyección de datos malformados
 * - Garantizar tipos correctos antes de procesar
 * - Generar mensajes de error claros para el cliente
 * - Cumplir con estándares de seguridad OWASP
 */

import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

// ============================================================================
// ESQUEMAS DE AUTENTICACIÓN
// ============================================================================

/**
 * Esquema de validación para login
 * @description Valida credenciales de usuario antes de procesarlas
 * - Username: 3-50 caracteres alfanuméricos
 * - Password: mínimo 8 caracteres
 */
export const loginSchema = z.object({
    username: z
        .string()
        .min(3, 'Username debe tener al menos 3 caracteres')
        .max(50, 'Username no puede exceder 50 caracteres')
        .regex(/^[a-zA-Z0-9_]+$/, 'Username solo puede contener letras, números y guiones bajos'),
    password: z
        .string()
        .min(8, 'Password debe tener al menos 8 caracteres')
});

export type LoginInput = z.infer<typeof loginSchema>;

// ============================================================================
// ESQUEMAS DE TESTS/PRUEBAS
// ============================================================================

/**
 * Esquema para parámetros de ruta de test
 * @description Valida el formato del ID de test
 * - Formato numérico para tests completados (ej: "123")
 * - Formato "pending-X" para tests pendientes (ej: "pending-456")
 */
export const testIdParamSchema = z.object({
    id: z
        .string()
        .regex(
            /^(pending-\d+|\d+)$/,
            'ID debe ser numérico o tener formato "pending-{número}"'
        )
});

export type TestIdParam = z.infer<typeof testIdParamSchema>;

/**
 * Esquema para query params de listado de tests
 * @description Parámetros opcionales para filtrado y paginación
 */
export const testsQuerySchema = z.object({
    status: z.enum(['PENDING', 'COMPLETED', 'ALL']).optional().default('ALL'),
    limit: z.coerce.number().int().min(1).max(100).optional().default(50),
    offset: z.coerce.number().int().min(0).optional().default(0)
});

export type TestsQuery = z.infer<typeof testsQuerySchema>;

// ============================================================================
// ESQUEMAS DE IMPORTACIÓN
// ============================================================================

/**
 * Esquema para configuración de importación Excel
 * @description Opciones para procesar archivo Excel subido
 */
export const excelImportSchema = z.object({
    sheet: z
        .string()
        .max(100, 'Nombre de hoja no puede exceder 100 caracteres')
        .optional(),
    skipRows: z.coerce.number().int().min(0).max(100).optional().default(2),
    clearExisting: z.coerce.boolean().optional().default(true)
});

export type ExcelImportOptions = z.infer<typeof excelImportSchema>;

// ============================================================================
// ESQUEMAS DE REPORTES
// ============================================================================

/**
 * Esquema para parámetros de reporte
 * @description Valida ID numérico de protocolo
 */
export const reportIdParamSchema = z.object({
    id: z.coerce
        .number()
        .int()
        .positive()
});

export type ReportIdParam = z.infer<typeof reportIdParamSchema>;

// ============================================================================
// HELPER: Middleware de validación genérico
// ============================================================================

/**
 * Interfaz para errores de validación
 */
interface ValidationErrorDetail {
    field: string;
    message: string;
}

/**
 * Factory para crear middleware de validación
 * @param schema - Esquema Zod a aplicar
 * @param source - Fuente de datos a validar ('body', 'params', 'query')
 * @returns Middleware de Express que valida y tipea el request
 * 
 * @example
 * app.post('/login', validate(loginSchema, 'body'), loginHandler);
 */
export function validate<T extends z.ZodTypeAny>(
    schema: T,
    source: 'body' | 'params' | 'query' = 'body'
) {
    return (req: Request, res: Response, next: NextFunction) => {
        const dataToValidate = req[source];
        const result = schema.safeParse(dataToValidate);

        if (!result.success) {
            // Zod v4 usa .error.issues o simplemente acceder a los issues
            const zodError = result.error;
            const errors: ValidationErrorDetail[] = [];

            if (zodError && 'issues' in zodError) {
                for (const issue of (zodError as { issues: Array<{ path: (string | number)[]; message: string }> }).issues) {
                    errors.push({
                        field: issue.path.join('.'),
                        message: issue.message
                    });
                }
            }

            return res.status(400).json({
                error: 'Validation Error',
                message: 'Los datos enviados no son válidos',
                details: errors
            });
        }

        // Reemplazar con datos validados y tipados
        (req as unknown as Record<string, unknown>)[source] = result.data;
        next();
    };
}
