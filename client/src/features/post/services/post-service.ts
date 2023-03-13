import * as postAPI from "../api/post-api";

import { IPost } from "../../../interfaces/Post";

export const createNewPost = async (data: IPost) => {
  const post = await postAPI.createPost(data);
  return post;
};
