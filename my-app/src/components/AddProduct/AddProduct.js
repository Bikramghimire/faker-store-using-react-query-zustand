import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  getAllProductCategories,
  postSingleProduct,
} from "../../api/productApi/productApi";
// import "./addproduct.css";
const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const mutation = useMutation((newProduct) => {
    postSingleProduct(newProduct);
  });
  const handleAddProduct = (newProduct) => {
    console.log("the added product is ====", addProduct);
    mutation.mutate(newProduct);
  };
  const {
    isLoading,
    error,
    data: allCategories,
  } = useQuery(["allCategory"], () => {
    return getAllProductCategories();
  });

  if (allCategories) {
    return (
      <div className="addproduct">
        <div className="center">
          <h1>addproduct</h1>
          <form>
            <div className="inputbox">
              <input
                type="text"
                required="required"
                value={addProduct.title}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddProduct({ ...addProduct, title: e.target.value });
                }}
              />
              <span>product name</span>
            </div>
            <div className="inputbox">
              <input
                type="number"
                required="required"
                value={addProduct.price}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddProduct({ ...addProduct, price: e.target.value });
                }}
              />
              <span>price</span>
            </div>
            <div className="inputbox">
              <input
                type="text"
                required="required"
                value={addProduct.description}
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddProduct({ ...addProduct, description: e.target.value });
                }}
              />
              <span>description</span>
            </div>
            <div className="inputbox">
              <span>upload image</span>
            </div>
            <div className="inputbox">
              <input
                type="file"
                required="required"
                onChange={(e) => {
                  console.log(e.target.value);
                  setAddProduct({ ...addProduct, image: e.target.files[0] });
                }}
              />
              <span>upload image</span>
            </div>
            <label for="categories">Choose a categories:</label>

            <select
              name="categories"
              id="categories"
              value={addProduct.category}
              onChange={(e) =>
                setAddProduct({ ...addProduct, category: e.target.value })
              }
            >
              {allCategories.data.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>

            <div className="inputbox">
              <button type="button" value="submit" onClick={handleAddProduct}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return <div>loading....</div>;
  }
};

export default AddProduct;
