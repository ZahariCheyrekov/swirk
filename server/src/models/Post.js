import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    postContent: {
        type: String,
        required: [true, 'Post content is required']
    },
    imageSrc: {
        type: String,
        default: ""
    },
    comments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post'
        }
    ],
    likes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    reswirks: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    userName: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    userPicture: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);
export default Post;