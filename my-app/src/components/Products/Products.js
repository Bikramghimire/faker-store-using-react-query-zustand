import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { getAllProduct } from "../../api/productApi/productApi";
import "./Products.css";

export const Products = () => {
  const {
    isLoading,
    data: allProductData,
    error,
  } = useQuery(["GetProducts"], () => getAllProduct());
  if (isLoading) {
    return <h3>products are loading keep patience 👌👌👌👌 </h3>;
  }
  if (allProductData) {
    console.log("data=====", allProductData);
    return (
      <div>
        <div class="shell">
          <div class="container">
            <div class="row">
              {allProductData.data.map((item) => {
                return (
                  <div class="col-md-3">
                    <div class="wsk-cp-product">
                      <div class="wsk-cp-img">
                        <img
                          src={item.image}
                          alt="Product"
                          class="img-responsive"
                        />
                      </div>
                      <div class="wsk-cp-text">
                        <div class="category">
                          <span>{item.category}</span>
                        </div>
                        <div class="title-product">
                          <h3>{item.title}</h3>
                        </div>
                        <div class="description-prod">
                          <p>{item.description}</p>
                        </div>
                        <div class="card-footer">
                          <div class="wcf-left">
                            <span class="price">{item.price}</span>
                          </div>
                          <div class="wcf-right">
                            <i class="fa-solid fa-cart-arrow-down"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
