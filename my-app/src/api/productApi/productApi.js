import apiClient from "../client";

const getAllProduct = async () => {
  console.log("this is running");
  const response = await apiClient.get("/products");
  return response;
};
const getSingleProduct = async (productID) => {
  await apiClient.get(`/products/${productID}`);
};

const postSingleProduct = async (data) => {
  await apiClient.post("/products", data);
};

export { getAllProduct, getSingleProduct, postSingleProduct };
