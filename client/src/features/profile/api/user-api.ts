import * as requester from "../../../api/requester";
import { BASE_URL } from "../../../constants/url";

export const getUserData = (userNickname: string) =>
  requester.get(`${BASE_URL}/user/${userNickname}`);

export const getCreatedPosts = (userId: string) =>
  requester.get(`${BASE_URL}/user/${userId}/swirks`);
