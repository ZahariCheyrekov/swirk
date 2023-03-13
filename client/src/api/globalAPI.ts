import * as requester from "./requester";

import { GET_POSTS_URL } from "../constants/url";


export const getPosts = () => requester.get(GET_POSTS_URL);
