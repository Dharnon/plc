import { Router } from 'express';
import { validate, testIdParamSchema } from '../middleware/validation';
import { asyncHandler } from '../middleware/errorHandler';
import { authenticate } from '../middleware/auth';
import * as testsController from '../controllers/tests.controller';

const router = Router();

// Todas las rutas de tests requieren autenticación (excepto en dev si se desea)
// router.use(authenticate);

router.get('/', asyncHandler(testsController.getTests));

router.get('/:id',
    validate(testIdParamSchema, 'params'),
    asyncHandler(testsController.getTestById)
);

export default router;
