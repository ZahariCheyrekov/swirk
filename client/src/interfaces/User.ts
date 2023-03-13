export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IUserInStorage {
  fullName: string;
  email: string;
  id: string;
  token: string;
}
