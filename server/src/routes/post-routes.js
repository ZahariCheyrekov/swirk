import express from 'express';

import { getPosts, createPost, likePost, dislikePost, undoReswirk } from '../controllers/post-controller.js';

const router = express.Router();

router.get("/posts", getPosts);
router.post("/create", createPost);
router.post("/posts/like", likePost);
router.delete("/posts/dislike", dislikePost);
router.delete("/posts/undo-reswirk", undoReswirk);

export default router;
