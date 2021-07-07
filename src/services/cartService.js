import http from "./httpServie";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "carts/";

export function getCartProducts() {
  return http.get(apiEndPoint);
}

export function getCartProduct(id) {
  return http.get(apiEndPoint + id);
}

export function updateCartProduct(cartProduct) {
  return http.put(apiEndPoint, cartProduct);
}

export function deleteCartProduct(cartProductId) {
  return http.delete(apiEndPoint + cartProductId);
}
