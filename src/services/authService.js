import jwtDecode from "jwt-decode";
import http, { setJwt } from "./httpServie";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "auth/";
const tokenKey = "token";

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  window.location = "/login";
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

setJwt(getJwt());

export default { login, logout, getCurrentUser, getJwt };
