import * as postService from '../services/post-service.js';


export const createPost = async (req, res) => {
    const { postContent, imageSrc, userId } = req.body;

    try {
        const post = await postService.createPost({ postContent, imageSrc }, userId);

        return res.status(200).json(post);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}