import http from "./httpServie";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "categories";

export function getCategories() {
  return http.get(apiEndPoint);
}
