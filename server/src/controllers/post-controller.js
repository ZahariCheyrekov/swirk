import * as postService from '../services/post-service.js';

export const getPost = async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await postService.getPostById(postId);
        return res.status(200).json(post);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const getPosts = async (req, res) => {
    try {
        const posts = await postService.getMainPosts();
        return res.status(200).json(posts);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const getPostComments = async (req, res) => {
    const { postId, postComments } = req.body;

    try {
        const comments = await postService.getPostComments(postId, postComments);
        return res.status(200).json(comments);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const createPost = async (req, res) => {
    const { postContent, imageSrc, profilePicture, userName, nickname, userId } = req.body;

    try {
        const post = await postService.createPost({
            postContent, imageSrc, userId, profilePicture, userName, nickname
        }, userId);
        return res.status(201).json(post);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const likePost = async (req, res) => {
    const { postId, userId } = req.body;

    try {
        const post = await postService.likePost(postId, userId);
        const response = {
            post: {
                postId: postId,
                likedBy: userId
            }
        }
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const dislikePost = async (req, res) => {
    const { postId, userId } = req.body;

    try {
        const post = await postService.removePostLike(postId, userId);
        const response = {
            post: {
                postId: postId,
                removedLikeBy: userId
            }
        }
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const commentPost = async (req, res) => {
    const { postData, postId, userId } = req.body;

    try {
        const commentedPost = await postService.commentOnPost(postData, postId, userId);
        return res.status(200).json(commentedPost);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const reswirkPost = async (req, res) => {
    const { postId, userId } = req.body;

    try {
        const post = await postService.reswirk(postId, userId);
        const response = {
            post: {
                postId: postId,
                reswirkedBy: userId
            }
        }
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const undoReswirk = async (req, res) => {
    const { postId, userId } = req.body;

    try {
        const post = await postService.removeReswirk(postId, userId);
        const response = {
            post: {
                postId: postId,
                removedReswirkBy: userId
            }
        }
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}