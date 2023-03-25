import User from '../models/User.js';
import * as postService from './post-service.js';

export const getUserByNickname = (nickname) => {
    return User.findOne({ nickname });
}

export const getUserById = (userId) => {
    return User.findById(userId);
}

export const getUserCommentedPosts = async (userId) => {
    const user = await getUserById(userId);
    const posts = await postService.getCommentedPosts(user.commentedPosts);
    return posts;
}

export const getUserReswirkedPosts = async (userId) => {
    const user = await getUserById(userId);
    const posts = await postService.getCommentedPosts(user.reswirkedPosts);
    return posts;
}

export const createUserPost = (userId, postId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $push: { createdPosts: postId } },
        { runValidators: true }
    );
}

export const addBookmark = (userId, postId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $push: { bookmarks: postId } },
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

export const commentUserPost = (userId, postId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $push: { commentedPosts: postId } },
        { runValidators: true }
    );
}