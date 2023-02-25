import Post from '../models/Post.js';

export const createPost = (data) => {
    return Post.create(data);
}