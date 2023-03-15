export interface IPostCreated {
  _id: string;
  postContent: string;
  imageSrc: any;
  comments: Array<string>;
  likes: Array<string>;
  reswirks: Array<string>;
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
