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

export const getUserBookmarks = async (userId) => {
    const user = await getUserById(userId);
    const bookmarks = await postService.getBookmarkedPosts(user.bookmarks);
    return bookmarks;
}

export const getUserReswirkedPosts = async (userId) => {
    const user = await getUserById(userId);
    const posts = await postService.getCommentedPosts(user.reswirkedPosts);
    return posts;
}

export const getUsersByText = async (userToSearch) => {
    return User.find({ nickname: { $regex: userToSearch, $options: 'i' } });
}

export const editUser = async (userNickname, userData) => {
    const user = await getUserByNickname(userNickname);
    return User.findByIdAndUpdate(user._id, userData);
}

export const addFollower = async (userToFollow, userFollowing) => {
    followUser(userToFollow, userFollowing);

    return User.findByIdAndUpdate(
        { _id: userToFollow },
        { $push: { followers: userFollowing } },
        { runValidators: true }
    );
}

export const followUser = async (userToFollow, userFollowing) => {
    await User.findByIdAndUpdate(
        { _id: userFollowing },
        { $push: { following: userToFollow } },
        { runValidators: true }
    );
}

export const removeFollower = async (userToUnfollow, userUnfollowing) => {
    unfollowUser(userToUnfollow, userUnfollowing);

    return User.findByIdAndUpdate(
        { _id: userToUnfollow },
        { $pull: { followers: userUnfollowing } },
        { runValidators: true }
    );
}

export const unfollowUser = async (userToUnfollow, userUnfollowing) => {
    await User.findByIdAndUpdate(
        { _id: userUnfollowing },
        { $pull: { following: userToUnfollow } },
        { runValidators: true }
    );
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