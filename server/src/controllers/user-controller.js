import * as userService from '../services/user-service.js';

export const getUser = async (req, res) => {
    const { nickname } = req.params;

    try {
        const user = await userService.getUserByNickname(nickname);
        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}
