import * as requester from "./requester";
import * as urls from "../constants/url";

export const getPosts = () => requester.get(urls.GET_POSTS_URL);

export const likePost = (postId: string, userId: string) =>
  requester.post(urls.LIKE_POST_URL, { postId, userId });

export const dislikePost = (postId: string, userId: string) =>
  requester.del(urls.DISLIKE_POST_URL, { postId, userId });

export const reswirkPost = (postId: string, userId: string) =>
  requester.post(urls.RESWIRK_POST_LINK, { postId, userId });

export const undoReswirk = (postId: string, userId: string) =>
  requester.del(urls.UNDO_RESWIRK_POST_LINK, { postId, userId });

export const bookmarkPost = (postId: string, userId: string | undefined) =>
  requester.post(urls.BOOKMARK_POST_URL, { postId, userId });

export const deletePost = (postId: string) =>
  requester.del(`${urls.DELETE_POST_LINK}/${postId}`);
