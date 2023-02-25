import epxress from 'express';

import authRoutes from './auth-routes.js';
import postRoutes from './post-routes.js';


const router = epxress.Router();

router.use(authRoutes);
router.use(postRoutes);

export default router;