import jwt from 'jsonwebtoken';

import { TOKEN_EXPIRATION_TIME } from '../constants/app-constants.js';

export const signJwtToken = (data) => {
    return jwt.sign(
        data,
        process.env.SECRET,
        { expiresIn: TOKEN_EXPIRATION_TIME }
    );
}