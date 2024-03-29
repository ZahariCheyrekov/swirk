import express from 'express';

import {
    getPosts,
    getPost,
    createPost,
    likePost,
    dislikePost,
    commentPost,
    getPostComments,
    reswirkPost,
    undoReswirk,
    bookmarkPost,
    deletePost
} from '../controllers/post-controller.js';

const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:postId", getPost);
router.post("/create", createPost);
router.post("/posts/like", likePost);
router.delete("/posts/dislike", dislikePost);
router.post("/posts/comment", commentPost);
router.post("/posts/comments", getPostComments);
router.post("/posts/bookmark", bookmarkPost);
router.post("/posts/reswirk", reswirkPost);
router.delete("/posts/undo-reswirk", undoReswirk);
router.delete("/posts/delete/:postId", deletePost);

export default router;
