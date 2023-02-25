import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    postContent: {
        type: String,
        required: [true, 'Post content is required']
    },
    imageSrc: {
        type: String,
    }
});

const Post = mongoose.model('Post', postSchema);
export default Post;