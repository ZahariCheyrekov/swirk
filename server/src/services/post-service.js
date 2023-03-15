import Post from '../models/Post.js';
import * as userService from '../services/user-service.js';

export const getMainPosts = () => {
    return Post.find();
}

export const createPost = async (data, userId) => {
    const post = await Post.create(data);
    const postId = post._id;

    await userService.createUserPost(userId, postId);

    return post;
}

export const likePost = async (postId, userId) => {
    const post = await Post.findByIdAndUpdate(
        { _id: postId },
        { $push: { likes: userId } },
        { runValidators: true }
    );

    await userService.likeUserPost(userId, postId);
    
    return post;
}