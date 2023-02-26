import User from '../models/User.js';


export const createUserPost = (userId, postId) => {
    return User.findByIdAndUpdate(
        { _id: userId },
        { $push: { createdPosts: postId } },
    );
}