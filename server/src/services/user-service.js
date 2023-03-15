import User from '../models/User.js';

export const createUserPost = (userId, postId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $push: { createdPosts: postId } },
        { runValidators: true }
    );
}

export const likeUserPost = (userId, postId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $push: { likedPosts: postId } },
        { runValidators: true }
    );
}