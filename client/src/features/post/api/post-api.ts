import * as requester from "../../../api/requester";

import { Post } from "../../../interfaces/Post";
import { CREATE_POST_URL } from "../../../constants/url";

export const createPost = (data: Post) => requester.post(CREATE_POST_URL, data);
