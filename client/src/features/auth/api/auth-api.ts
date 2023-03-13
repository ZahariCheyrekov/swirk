import * as requester from "../../../api/requester";

import { IUser } from "../../../interfaces/User";
import { LOGIN_URL, REGISTER_URL } from "../../../constants/url";

export const login = (data: IUser) => requester.post(LOGIN_URL, data);

export const register = (data: IUser) => requester.post(REGISTER_URL, data);
