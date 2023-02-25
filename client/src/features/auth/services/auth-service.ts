import * as authAPI from "../api/auth-api";
import { User } from "../../../interfaces/User";

export const loginUser = async (data: User) => {
  const user = await authAPI.login(data);
  console.log(user);
};

export const registerUser = async (data: User) => {
  const user = await authAPI.register(data);
  console.log(user);
};
