import express from 'express';

import { getUser, getSwirks, getLikes, getComments } from '../controllers/user-controller.js';


const router = express.Router();

router.get("/user/:nickname", getUser);
router.get("/user/:userId/swirks", getSwirks)
router.get("/user/:userId/likes", getLikes)
router.get("/user/:userId/comments", getComments)

export default router;
