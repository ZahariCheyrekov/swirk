export interface IPost {
  _id: string;
  postContent: string;
  imageSrc: any;
  username: string;
  userId: string | undefined;
  comments: Array<string>;
  likes: Array<string>;
  reswirks: Array<string>;
}
