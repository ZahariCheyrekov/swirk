export interface IPostCreated {
  _id: string;
  postContent: string;
  imageSrc: any;
  comments: Array<IPostCreated>;
  likes: Array<string>;
  reswirks: Array<string>;
  bookmarks: Array<string>;
  userId: string;
  profilePicture: string;
  userName: string;
  nickname: string;
  createdAt: string | Date;
}

export interface IPostCreate {
  postContent: string;
  imageSrc: any;
  userId: string;
  profilePicture: string;
  userName: string;
  nickname: string;
}
