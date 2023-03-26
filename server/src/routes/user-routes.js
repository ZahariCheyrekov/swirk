import express from 'express';

import {
    getUser,
    getSwirks,
    getLikes,
    getComments,
    getReswirks,
    getBookmarks,
    followUser
} from '../controllers/user-controller.js';


const router = express.Router();

router.get("/user/:nickname", getUser);
router.get("/user/:userId/swirks", getSwirks);
router.get("/user/:userId/likes", getLikes);
router.get("/user/:userId/comments", getComments);
router.get("/user/:userId/reswirks", getReswirks);
router.get("/user/:userId/bookmarks", getBookmarks);
router.post("/user/:userToFollow/follow", followUser);

export default router;
