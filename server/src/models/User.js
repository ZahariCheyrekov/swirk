import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        minLength: [2, 'Full name should be at least 4 characters long'],
        required: [true, 'Full name is required']
    },
    nickname: {
        type: String,
        unique: [true, 'Nickname is already in user'],
        minLength: [2, 'Nickname should be at least 4 characters long'],
        required: [true, 'Nickname is required']
    },
    email: {
        type: String,
        unique: [true, 'Email is already in use'],
        minLength: [6, 'Email should be at least 6 characters long'],
        validate: (email) => {
            const regex = /\b(?<name>[A-Za-z]+).*\@(?<domain>[A-Za-z]+)\.(?<extension>[A-Za-z]+)\b/g
            if (!email.match(regex)) {
                throw new Error('The email should be in format: "john@gmail.com" or "john.doe@gmail.com"');
            }
        },
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        minLength: [6, 'Password must be at least 6 characters long'],
        validate: (password) => {
            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters long');
            }
        },
        required: [true, 'Password is required']
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    createdPosts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post'
        }
    ],
    commentedPosts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post'
        }
    ],
    likedPosts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post'
        }
    ],
    reswirkedPosts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post'
        }
    ],
});

const User = mongoose.model('User', userSchema);
export default User;