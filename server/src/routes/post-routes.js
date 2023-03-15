import express from 'express';

import { getPosts, createPost, likePost, dislikePost } from '../controllers/post-controller.js';

const router = express.Router();

router.get("/posts", getPosts);
router.post("/create", createPost);
router.post("/posts/like", likePost);
router.delete("/posts/dislike", dislikePost);

export default router;
