import React, { useState } from "react";
import "./addproduct.css";
const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const handleAddProduct = () => {
    console.log("the added product is ====", addProduct);
  };
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
          <div className="inputbox">
            <button type="button" value="submit" onClick={handleAddProduct}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
