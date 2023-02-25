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
            id: existingUser._id,
            email: existingUser.email,
            fullName: existingUser.fullName,
            token: token
        }

        return res.status(200).json(result);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}
