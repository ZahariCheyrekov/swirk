import epxress from 'express';

import authRoutes from './auth-routes.js';


const router = epxress.Router();

router.use('/', authRoutes);

export default router;