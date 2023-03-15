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

export const removeUserLike = (userId, postId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $pull: { likedPosts: postId } },
        { runValidators: true }
    );
}

export const reswirkUserPost = (userId, postId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $push: { reswirkedPosts: postId } },
        { runValidators: true }
    );
}

export const removeUserReswirk = (userId, postId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $pull: { reswirkedPosts: postId } },
        { runValidators: true }
    );
}