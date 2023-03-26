import * as userService from '../services/user-service.js';
import * as postService from '../services/post-service.js';

export const getUser = async (req, res) => {
    const { nickname } = req.params;

    try {
        const user = await userService.getUserByNickname(nickname);
        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const getSwirks = async (req, res) => {
    const { userId } = req.params;

    try {
        const createdPosts = await postService.getCreatedPosts(userId);
        return res.status(200).json(createdPosts);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const getLikes = async (req, res) => {
    const { userId } = req.params;

    try {
        const createdPosts = await postService.getLikedPosts(userId);
        return res.status(200).json(createdPosts);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const getComments = async (req, res) => {
    const { userId } = req.params;

    try {
        const createdPosts = await userService.getUserCommentedPosts(userId);
        return res.status(200).json(createdPosts);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const getReswirks = async (req, res) => {
    const { userId } = req.params;

    try {
        const reswirkedPosts = await userService.getUserReswirkedPosts(userId);
        return res.status(200).json(reswirkedPosts);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const getBookmarks = async (req, res) => {
    const { userId } = req.params;

    try {
        const bookmarks = await userService.getUserBookmarks(userId);
        return res.status(200).json(bookmarks);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const followUser = async (req, res) => {
    const { userToFollow, userFollowing } = req.body;

    try {
        await userService.addFollower(userToFollow, userFollowing);
        const response = {
            userFollowed: userToFollow,
            followedBy: userFollowing
        }
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}


export const unfollowUser = async (req, res) => {
    const { userToUnfollow, userUnfollowing } = req.body;

    try {
        await userService.removeFollower(userToUnfollow, userUnfollowing);
        const response = {
            userFollowed: userToUnfollow,
            followedBy: userUnfollowing
        }
        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}