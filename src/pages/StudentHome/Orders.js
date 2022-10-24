import React from "react";
import { Link } from "react-router-dom";
import orderJson from "./../../model/student/order-history.json";
import Sidebar from "../../component/Sidebar/Sidebar";

const Orders = () => {
  const orders = orderJson;
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
            {orders.map((item) => (
              <div className="product">
                <div className="pdt_img">
                  <img src={item.image} alt="ok" />
                </div>
                <div className="description">
                  <h2>{item.name}</h2>
                  <h5>${item.price}</h5>
                  <p className="btn-remove">{item.date}</p>
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

export default Orders;
