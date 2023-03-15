import * as requester from "../../../api/requester";

import { IPostCreate } from "../../../interfaces/Post";
import { CREATE_POST_URL } from "../../../constants/url";

export const createPost = (data: IPostCreate) => requester.post(CREATE_POST_URL, data);
