import * as requester from "./requester";

import { GET_POSTS_URL, LIKE_POST_URL } from "../constants/url";

export const getPosts = () => requester.get(GET_POSTS_URL);

export const likePost = (postId: string, userId: string) =>
  requester.post(LIKE_POST_URL, { postId, userId });
