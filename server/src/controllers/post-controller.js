import * as postService from '../services/post-service.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await postService.getMainPosts();
        return res.status(200).json(posts);

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
        return res.status(201).json(response);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}