import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar";
import { addToCart } from "../../state/slices/cartSlice";
import productJson from "./../../model/student/products.json";

const StudentProducts = () => {
  const products = productJson;
  const dispatch = useDispatch();

  const otherProduct = (products) =>
    products.filter((item) => item.purchased === false && item.owner === false);

  const onBuyorReturn = (e, item) => {
    console.log(e.target.style);
    e.target.style.backgroundColor = "#aaaaaa";
    e.target.style.pointerEvents = "none";

    dispatch(addToCart(item));
  };

  return (
    <section
      className="vh-500 product_bo"
      style={{ backgroundColor: "#232659" }}
    >
      <Sidebar />
      <div className="wrapper">
        <div className="cart">
          <div className="cartproducts">
            <h1>Explore Products</h1>
            {otherProduct(products).map((item) => (
              <div className="product">
                <div className="pdt_img">
                  <img src={item.image} alt="ok" />
                </div>
                <div className="description">
                  <h2>{item.name}</h2>
                  <h5>${item.price}</h5>
                  <p
                    className="btn-remove"
                    onClick={(e) => onBuyorReturn(e, item)}
                  >
                    {" "}
                    <span className="btn2">BUY</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="price-details">
            <img src="/asset/images/adbo1.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProducts;
