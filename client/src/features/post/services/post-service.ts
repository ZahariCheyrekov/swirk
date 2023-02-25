import * as postAPI from "../api/post-api";

import { Post } from "../../../interfaces/Post";

export const createNewPost = async (data: Post) => {
  const post = await postAPI.createPost(data);
  return post;
};
