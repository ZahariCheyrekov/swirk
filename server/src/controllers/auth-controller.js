import bcrypt from 'bcrypt';

import * as authService from '../services/auth-service.js';
import { signJwtToken } from '../lib/jwt.js';
import { SALT } from '../constants/app-constants.js';
import { INVALID_CREDENTIALS, PASSWORDS_DONT_MATCH, USER_ALREADY_EXISTS, USER_DOESNT_EXIST } from '../constants/errors.js';


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await authService.getUserByEmail(email);

        if (!existingUser) {
            return res.status(400).json({ message: USER_DOESNT_EXIST });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: INVALID_CREDENTIALS });
        }

        const token = signJwtToken({ email: existingUser.email, id: existingUser._id });

        const result = {
            _id: existingUser._id,
            email: existingUser.email,
            fullName: existingUser.fullName,
            nickname: existingUser.nickname,
            profilePicture: existingUser.profilePicture,
            token: token
        }

        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

export const register = async (req, res) => {
    const { firstName, lastName, email, password, repeatPassword } = req.body;

    try {
        const existingUser = await authService.getUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({ message: USER_ALREADY_EXISTS });
        }

        if (password !== repeatPassword) {
            return res.status(400).json({ message: PASSWORDS_DONT_MATCH });
        }

        const hashedPassword = await bcrypt.hash(password, SALT);


        const fullName = `${firstName} ${lastName}`;
        const nickname = fullName.toLowerCase().split(' ').join('');
        const newUser = await authService.createUser({ email, password: hashedPassword, fullName, nickname });

        const token = signJwtToken({ email: newUser.email, id: newUser._id });

        const result = {
            _id: newUser._id,
            email: newUser.email,
            fullName: newUser.fullName,
            nickname: newUser.nickname,
            profilePicture: newUser.profilePicture,
            token: token
        }

        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}