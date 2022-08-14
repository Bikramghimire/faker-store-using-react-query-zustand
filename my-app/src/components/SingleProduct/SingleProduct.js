import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/productApi/productApi";
import "./singleproduct.css";
const SingleProduct = () => {
  let { productID } = useParams();

  console.log("the params value:", productID);
  const {
    data: singleProduct,
    isLoading,
    isError,
    isFetching,
  } = useQuery(["Products", productID], () => {
    return getSingleProduct(productID);
  });

  if (singleProduct) {
    return <p>data came</p>;
  }
  if (!isLoading) {
    console.log("single datat===", singleProduct);
    return <p>is loading</p>;
  }
  if (isFetching) {
    return <>this is isFetching</>;
  }

  // return (
  //   <div className="wrapper">
  //     <div className="product-img">
  //       <img
  //         src="http://bit.ly/2tMBBTd"
  //         alt="productimage"
  //         height="420"
  //         width="327"
  //       />
  //     </div>
  //     <div className="product-info">
  //       <div class="product-text">
  //         <h1>Harvest Vase</h1>
  //         <h2>by studio and friends</h2>
  //         <p>this is the product descriptions</p>
  //       </div>
  //       <div class="product-price-btn">
  //         <p>
  //           <span>78</span>$
  //         </p>
  //         <button type="button">buy now</button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default SingleProduct;
