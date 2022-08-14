import React from "react";
import Navbar from "../Navbar/Navbar";
import { Products } from "../Products/Products";
import SingleProduct from "../SingleProduct/SingleProduct";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default MainPage;
