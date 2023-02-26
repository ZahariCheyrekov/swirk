import * as requester from "../../../api/requester";

import { User } from "../../../interfaces/User";
import { LOGIN_URL, REGISTER_URL } from "../../../constants/url";

export const login = (data: User) => requester.post(LOGIN_URL, data);

export const register = (data: User) => requester.post(REGISTER_URL, data);
