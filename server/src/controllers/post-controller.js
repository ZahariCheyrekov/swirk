import * as postService from '../services/post-service.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await postService.getMainPosts();

        console.log(posts);

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