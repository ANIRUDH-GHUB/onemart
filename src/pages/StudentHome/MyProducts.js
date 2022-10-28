import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productJson from "./../../model/student/products.json";
import Sidebar from "../../component/Sidebar/Sidebar";
import CardList from "../../component/CardList/CardList";
import { getAllProductsById } from "../../services/productService";

const MyProducts = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getAllProductsById(localStorage.getItem("user_id"));
      console.log(res);
      setProduct(res);
    }
    fetchData();
  }, []);

  const ownerProduct = (products) => products.map((product) => product.acf);
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
            <CardList propList={ownerProduct(products)} sell={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProducts;
