import { BASE_URL } from "./config";

export const getRestaurants = () => fetch(BASE_URL + "/api/restaurants").then(data => data.json());

