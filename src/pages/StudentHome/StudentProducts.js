import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../state/slices/cartSlice";
import productJson from "./../../model/student/products.json";

const StudentProducts = () => {
  const products = productJson;
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    owned: [],
    purchased: [],
    other: [],
  });

  const ownerProduct = (products) =>
    products.filter((item) => item.owner === true);
  const purchaseProduct = (products) =>
    products.filter((item) => item.purchased === true);
  const otherProduct = (products) =>
    products.filter((item) => item.purchased === false && item.owner === false);

  const onBuyorReturn = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <section
      className="vh-500 product_bo"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>My Products</h1>
        <div className="cart">
          <div className="cartproducts">
            {console.log(ownerProduct(products))}
            {ownerProduct(products).map((item) => (
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
            ))}
            <div>
              <Link to="sell" className="view-more create-new">
                Sell Product
              </Link>
            </div>
            <h1>Products Purchased</h1>
            {purchaseProduct(products).map((item) => (
              <div className="product">
                <div className="pdt_img">
                  <img src={item.image} alt="ok" />
                </div>
                <div className="description">
                  <h2>{item.name}</h2>
                  <h5>${item.price}</h5>
                  <p className="btn-remove" onClick={() => onBuyorReturn(item)}>
                    {" "}
                    <span className="btn2">RETURN</span>
                  </p>
                </div>
              </div>
            ))}
            <h1>Explore Products</h1>
            {otherProduct(products).map((item) => (
              <div className="product">
                <div className="pdt_img">
                  <img src={item.image} alt="ok" />
                </div>
                <div className="description">
                  <h2>{item.name}</h2>
                  <h5>${item.price}</h5>
                  <p className="btn-remove" onClick={() => onBuyorReturn(item)}>
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
