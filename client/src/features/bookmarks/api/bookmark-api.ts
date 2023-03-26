import * as requester from "../../../api/requester";
import { BASE_URL } from "../../../constants/url";

export const getBookmarks = (userId: string | undefined) =>
  requester.get(`${BASE_URL}/user/${userId}/bookmarks`);
