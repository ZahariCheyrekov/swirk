import { IPostCreated } from "./Post";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IUserInStorage {
  bio: string;
  bookmarks: Array<string>;
  commentedPosts: Array<IPostCreated>;
  coverPicture: string;
  createdPosts: Array<string>;
  email: string;
  followers: Array<string>;
  following: Array<string>;
  fullName: string;
  likedPosts: Array<string>;
  nickname: string;
  profilePicture: string;
  reswirkedPosts: Array<string>;
  token: string;
  _id: string;
}

export interface IUserSearch {
  _id: string;
  nickname: string;
  profilePicture: string;
  followers: Array<string>;
  following: Array<string>;
}
