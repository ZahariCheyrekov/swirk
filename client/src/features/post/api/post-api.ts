import * as requester from "../../../api/requester";
import * as urls from "../../../constants/url";

import { IPostCreate, IPostCreated } from "../../../interfaces/Post";

export const getPost = (postId: string | undefined) =>
  requester.get(`${urls.GET_POSTS_URL}/${postId}`);

export const getPostComments = (
  postId: string | undefined,
  postComments: IPostCreated[] | undefined
) => requester.post(urls.GET_POST_COMMENTS_URL, { postId, postComments });

export const createPost = (data: IPostCreate) =>
  requester.post(urls.CREATE_POST_URL, data);

export const commentPost = (
  postData: IPostCreate, 
  postId: string | undefined,
  userId: string | undefined
) => {
  requester.post(urls.COMMENT_POST_URL, { postData, postId, userId });
};
