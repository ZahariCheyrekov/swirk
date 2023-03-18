import express from 'express';

import { getUser } from '../controllers/user-controller.js';


const router = express.Router();

router.get("/:nickname", getUser);

export default router;
