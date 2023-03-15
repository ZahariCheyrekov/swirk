import * as postAPI from "../api/post-api";

import { IPostCreate } from "../../../interfaces/Post";

export const createNewPost = async (data: IPostCreate) => {
  const post = await postAPI.createPost(data);
  return post;
};
