import * as requester from "./requester";
import * as urls from "../constants/url";

export const getPosts = () => requester.get(urls.GET_POSTS_URL);

export const likePost = (postId: string, userId: string) =>
  requester.post(urls.LIKE_POST_URL, { postId, userId });

export const dislikePost = (postId: string, userId: string) =>
  requester.del(urls.DISLIKE_POST_URL, { postId, userId });
