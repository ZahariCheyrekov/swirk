import epxress from 'express';

import authRoutes from './auth-routes.js';
import userRoutes from './user-routes.js';
import postRoutes from './post-routes.js';


const router = epxress.Router();

router.use(authRoutes);
router.use(userRoutes);
router.use(postRoutes);

export default router;