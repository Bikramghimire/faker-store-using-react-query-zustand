import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default apiClient;
