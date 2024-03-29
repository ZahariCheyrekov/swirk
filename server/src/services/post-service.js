import Post from '../models/Post.js';
import * as userService from '../services/user-service.js';

export const getPostById = (postId) => {
    return Post.findById(postId);
}

export const getMainPosts = () => {
    return Post.find();
}

export const getCreatedPosts = (userId) => {
    return Post.find({ userId: userId })
}

export const getLikedPosts = (userId) => {
    return Post.find({ likes: userId });
}

export const getCommentedPosts = (commentsIds) => {
    return Post.find({ _id: { $in: commentsIds } });;
}

export const getBookmarkedPosts = (bookmarks) => {
    return Post.find({ _id: { $in: bookmarks } });
}

export const getReswirkedPosts = (reswirkedIds) => {
    return Post.find({ _id: { $in: reswirkedIds } });;
}

export const getPostComments = (postId, comments) => {
    return getPostById(postId).find({ _id: { $in: comments } });
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

export const removePostLike = async (postId, userId) => {
    const post = await Post.findByIdAndUpdate(
        { _id: postId },
        { $pull: { likes: userId } },
        { runValidators: true }
    );

    await userService.removeUserLike(userId, postId);
    return post;
}

export const commentOnPost = async (postData, postId, userId) => {
    const postCreated = await createPost(postData, userId);

    await Post.findByIdAndUpdate(
        { _id: postId },
        { $push: { comments: postCreated._id } },
        { runValidators: true }
    );

    await userService.commentUserPost(userId, postId);
    return postCreated;
}

export const reswirk = async (postId, userId) => {
    const post = await Post.findByIdAndUpdate(
        { _id: postId },
        { $push: { reswirks: userId } },
        { runValidators: true }
    );

    await userService.reswirkUserPost(userId, postId);
    return post;
}

export const removeReswirk = async (postId, userId) => {
    const post = await Post.findByIdAndUpdate(
        { _id: postId },
        { $pull: { reswirks: userId } },
        { runValidators: true }
    );

    await userService.removeUserReswirk(userId, postId);
    return post;
}

export const deletePostById = async (postId) => {
    return Post.findByIdAndRemove(postId);
}