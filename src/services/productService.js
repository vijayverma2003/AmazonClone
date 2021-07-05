import http from "./httpServie";
import { apiUrl } from "../config.json";

const apiEndPoint = apiUrl + "products/";

export function Products() {
  return http.get(apiEndPoint);
}

export function getProduct(id) {
  return http.get(apiEndPoint + id);
}

export function updateProduct(product) {
  // if (product._id) {
  const body = { ...product };
  delete body._id;
  delete body.tags;

  return http.put(apiEndPoint + product._id, body);
}

export function saveProduct(product) {
  return http.post(apiEndPoint, product);
}

export function deleteProduct(productId) {
  return http.delete(apiEndPoint + productId);
}
