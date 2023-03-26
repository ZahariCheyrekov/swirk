import * as requester from "../../../api/requester";
import { BASE_URL } from "../../../constants/url";

export const getUserData = (userNickname: string) =>
  requester.get(`${BASE_URL}/user/${userNickname}`);

export const getCreatedPosts = (userId: string) =>
  requester.get(`${BASE_URL}/user/${userId}/swirks`);

export const getLikedPosts = (userId: string) =>
  requester.get(`${BASE_URL}/user/${userId}/likes`);

export const getCommentedPosts = (userId: string) =>
  requester.get(`${BASE_URL}/user/${userId}/comments`);

export const getReswirkedPosts = (userId: string) =>
  requester.get(`${BASE_URL}/user/${userId}/reswirks`);

export const followUser = (userToFollow: string, userFollowing: string) =>
  requester.post(`${BASE_URL}/user/${userToFollow}/follow`, {
    userToFollow,
    userFollowing,
  });
