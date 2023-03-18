import { USER } from "../constants/app";
import { IUserInStorage } from "../interfaces/User";

export const saveUser = (user: IUserInStorage) => {
  if (user.token) {
    localStorage.setItem(USER, JSON.stringify(user));
  }
};

export const removeUser = () => localStorage.removeItem(USER);

export const getAccessToken = (): string | undefined => getUser()?.token;

export const getUserId = (): string | undefined => getUser()?._id;

export const getUser = (): IUserInStorage | undefined => {
  const serializedUser = localStorage.getItem(USER);

  if (serializedUser) {
    const user: IUserInStorage = JSON.parse(serializedUser);
    return user;
  }
};
