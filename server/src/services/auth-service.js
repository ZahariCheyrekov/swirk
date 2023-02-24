import User from '../models/User';

export const getUserByEmail = (email) => {
    return User.find({ email });
}

export const createUser = (userData) => {
    return User.create(userData);
}