import * as requester from "../../../api/requester";

import { IPost } from "../../../interfaces/Post";
import { CREATE_POST_URL } from "../../../constants/url";

export const createPost = (data: IPost) => requester.post(CREATE_POST_URL, data);
