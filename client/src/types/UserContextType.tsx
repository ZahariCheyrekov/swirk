import { IUserInStorage } from "../interfaces/User";

export type UserContextType = {
  user: IUserInStorage;
  updateUser(user: IUserInStorage): void;
};
