export interface IPost {
  _id?: string;
  postContent: string;
  imageSrc: any;
  comments?: Array<string>;
  likes?: Array<string>;
  reswirks?: Array<string>;
  userId: string | undefined;
  profilePicture: string;
  userName: string;
  nickname: string;
}
