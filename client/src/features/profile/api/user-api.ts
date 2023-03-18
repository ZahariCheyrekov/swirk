import * as requester from "../../../api/requester";
import { BASE_URL } from "../../../constants/url";

export const getUserData = (userNickname: string) =>
  requester.get(`${BASE_URL}/${userNickname}`);
