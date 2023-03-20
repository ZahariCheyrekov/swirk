import express from 'express';

import { getUser, getSwirks } from '../controllers/user-controller.js';


const router = express.Router();

router.get("/user/:nickname", getUser);
router.get("/user/:userId/swirks", getSwirks)

export default router;
