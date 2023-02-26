export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface UserInStorage {
  fullName: string;
  email: string;
  id: string;
  token: string;
}
