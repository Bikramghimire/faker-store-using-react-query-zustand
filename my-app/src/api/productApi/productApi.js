import apiClient from "../client";

const getAllProduct = async () => {
  console.log("this is running");
  const response = await apiClient.get("/products");
  return response;
};
const getSingleProduct = async (productID) => {
  return await apiClient.get(`/products/${productID}`);
};

const postSingleProduct = async (data) => {
  const json = JSON.parse(JSON.stringify(data));
  await apiClient.post("/products", json);
};
const getAllProductCategories = async () => {
  return await apiClient.get("/products/categories");
};

export {
  getAllProduct,
  getSingleProduct,
  postSingleProduct,
  getAllProductCategories,
};
