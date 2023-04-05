import * as requester from "../../../api/requester";
import { BASE_URL } from "../../../constants/url";

export const getUsers = (inputText: string | undefined) =>
  requester.get(`${BASE_URL}/search/${inputText}`);
