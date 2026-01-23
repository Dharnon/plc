import { Router } from 'express';
import authRoutes from './auth.routes';
import testsRoutes from './tests.routes';
import importRoutes from './import.routes';
import reportsRoutes from './reports.routes';
import healthRoutes from './health.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/tests', testsRoutes);
router.use('/import', importRoutes);
router.use('/reports', reportsRoutes);
router.use('/health', healthRoutes);

export default router;
