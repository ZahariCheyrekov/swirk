import { HttpMethods } from "../types/HttpMethods";
import * as localStorage from "../services/localStorage";
import {
  APPLICATION_JSON,
  CONTENT_TYPE,
  DELETE,
  GET,
  POST,
  PUT,
  X_AUTHORIZATION,
} from "../constants/http";

export const request = async (
  method: HttpMethods,
  url: string,
  data?: Object
) => {
  const options: any = {
    method,
    headers: {},
  };

  const token = localStorage.getAccessToken();

  if (token) {
    options.headers[X_AUTHORIZATION] = token;
  }

  if (data) {
    options.headers[CONTENT_TYPE] = APPLICATION_JSON;

    if (method !== GET) {
      options.body = JSON.stringify(data);
    }
  }

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const get = request.bind(null, GET);
export const post = request.bind(null, POST);
export const put = request.bind(null, PUT);
export const del = request.bind(null, DELETE);
