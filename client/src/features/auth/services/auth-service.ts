import * as authAPI from "../api/auth-api";

import { saveUser } from "../../../services/localStorage";
import { IUser, IUserInStorage } from "../../../interfaces/User";

export const loginUser = async (data: IUser) => {
  const user: IUserInStorage = await authAPI.login(data);
  saveUser(user);
  return user;
};

export const registerUser = async (data: IUser) => {
  const user: IUserInStorage = await authAPI.register(data);
  saveUser(user);
  return user;
};
