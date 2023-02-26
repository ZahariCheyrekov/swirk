import * as authAPI from "../api/auth-api";

import { saveUser } from "../../../services/localStorage";
import { User, UserInStorage } from "../../../interfaces/User";

export const loginUser = async (data: User) => {
  const user: UserInStorage = await authAPI.login(data);
  saveUser(user);
  return user;
};

export const registerUser = async (data: User) => {
  const user: UserInStorage = await authAPI.register(data);
  saveUser(user);
  return user;
};
