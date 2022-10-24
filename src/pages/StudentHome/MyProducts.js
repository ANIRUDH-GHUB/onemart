import React from "react";
import { Link } from "react-router-dom";
import productJson from "./../../model/student/products.json";
import Sidebar from "../../component/Sidebar/Sidebar";
import CardList from "../../component/CardList/CardList";

const MyProducts = () => {
  const products = productJson;

  const ownerProduct = (products) =>
    products.filter((item) => item.owner === true);
  return (
    <section
      className="vh-500 product_bo"
      style={{ backgroundColor: "#232659" }}
    >
      <Sidebar />

      <div className="wrapper">
        <h1>My Products</h1>
        <div className="cart">
          <div className="cartproducts">
            {/* {ownerProduct(products).map((item) => (
              <div className="product">
                <div className="pdt_img">
                  <img src={item.image} alt="ok" />
                </div>
                <div className="description">
                  <h2>{item.name}</h2>
                  <h5>${item.price}</h5>
                  <p className="btn-remove">
                    {" "}
                    <span className="btn2">DELETE</span>
                  </p>
                </div>
              </div>
            ))} */}
            <CardList propList={ownerProduct(products)} sell={true} />
          </div>

          <div className="price-details">
            <img src="/asset/images/adbo1.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProducts;
