import { USER } from "../constants/app";
import { UserInStorage } from "../interfaces/User";

export const saveUser = (user: UserInStorage) => {
  if (user.accessToken) {
    localStorage.setItem(USER, JSON.stringify(user));
  }
};

export const removeUser = () => localStorage.removeItem(USER);

export const getAccessToken = (): string | undefined => getUser()?.accessToken;

export const getUser = (): UserInStorage | undefined => {
  const serializedUser = localStorage.getItem(USER);

  if (serializedUser) {
    const user: UserInStorage = JSON.parse(serializedUser);
    return user;
  }
};
