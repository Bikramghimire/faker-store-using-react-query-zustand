import apiClient from "../client";

const getAllProduct = async () => {
  console.log("this is running");
  const response = await apiClient.get("/products");
  return response;
};
const getSingleProduct = async (productID) => {
  const response = apiClient.get(`/products/${productID}`);
  return response;
};

export { getAllProduct, getSingleProduct };
