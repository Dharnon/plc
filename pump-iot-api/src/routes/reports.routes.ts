import { Router } from 'express';
import multer from 'multer';
import { validate, reportIdParamSchema } from '../middleware/validation';
import { asyncHandler } from '../middleware/errorHandler';
import * as reportsController from '../controllers/reports.controller';

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 }
});

router.get('/:id',
    validate(reportIdParamSchema, 'params'),
    asyncHandler(reportsController.getReportById)
);

router.post('/pdf',
    asyncHandler(reportsController.generateReportPdf)
);

router.post('/extract-pdf',
    upload.single('file'),
    asyncHandler(reportsController.extractPdfSpecs)
);

export default router;
