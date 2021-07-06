import http from "./httpServie";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "users/";

export function register(user) {
  return http.post(apiEndPoint, user);
}
