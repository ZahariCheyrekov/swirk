import express from 'express';

import { getPosts, createPost, likePost } from '../controllers/post-controller.js';

const router = express.Router();

router.get("/posts", getPosts);
router.post("/create", createPost);
router.post("/posts/like", likePost);

export default router;
