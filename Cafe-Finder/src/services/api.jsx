import axios from "axios";

const API_URL = "http://localhost:5001/api";

export const getCoffeeShops = async () => {
  return await axios.get(`${API_URL}/coffee-shops`);
};

export const getCoffeeShopById = async (id) => {
  return await axios.get(`${API_URL}/coffee-shops/${id}`);
};

export const getProductsByCoffeeShop = async (coffeeShopId) => {
  return await axios.get(`${API_URL}/products/${coffeeShopId}/products`);
};
