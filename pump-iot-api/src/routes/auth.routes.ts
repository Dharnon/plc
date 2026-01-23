import { Router } from 'express';
import { validate } from '../middleware/validation';
import { loginSchema } from '../middleware/validation';
import { asyncHandler } from '../middleware/errorHandler';
import * as authController from '../controllers/auth.controller';

const router = Router();

router.post('/login',
    validate(loginSchema),
    asyncHandler(authController.login)
);

export default router;
