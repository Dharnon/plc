import { Router } from 'express';
import multer from 'multer';
import { validate, excelImportSchema } from '../middleware/validation';
import { asyncHandler } from '../middleware/errorHandler';
import * as importController from '../controllers/import.controller';

const router = Router();

// Configuración Multer
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB
});

router.post('/excel/sheets',
    upload.single('file'),
    asyncHandler(importController.getExcelSheets)
);

router.post('/excel',
    upload.single('file'),
    validate(excelImportSchema),
    asyncHandler(importController.importExcel)
);

router.post('/csv',
    upload.single('file'),
    asyncHandler(importController.importCsv)
);

router.get('/listados',
    asyncHandler(importController.getListados)
);

export default router;
