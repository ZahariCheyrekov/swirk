import { USER } from "../constants/app";
import { UserInStorage } from "../interfaces/User";

export const saveUser = (user: UserInStorage) => {
  if (user.token) {
    localStorage.setItem(USER, JSON.stringify(user));
  }
};

export const removeUser = () => localStorage.removeItem(USER);

export const getAccessToken = (): string | undefined => getUser()?.token;

export const getUserId = (): string | undefined => getUser()?.id;

export const getUser = (): UserInStorage | undefined => {
  const serializedUser = localStorage.getItem(USER);

  if (serializedUser) {
    const user: UserInStorage = JSON.parse(serializedUser);
    return user;
  }
};
