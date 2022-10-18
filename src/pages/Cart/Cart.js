import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="vh-500" style={{ backgroundColor: "#232659" }}>
      <div className="wrapper">
        <h1>My Cart</h1>
        <div className="cart">
          <div className="cartproducts">
            <div className="product">
              <div className="pdt_img">
                <img src="assets/images/algorithm.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>
                  Introduction to Algorithms, 3rd Edition (The MIT Press) 3rd
                  Edition
                </h3>
                <h4>$35</h4>
                <p className="quantity">
                  Quantity: <input name="" value="2" />
                </p>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Remove</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="assets/images/starbucks.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Starbucks Coffee, Ground, Maple Pecan - 17 oz</h3>
                <h4>$20</h4>
                <p className="quantity">
                  Quantity: <input name="" value="1" />
                </p>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Remove</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="assets/images/headphones.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Bose SoundLink around-ear wireless headphones II- Black</h3>
                <h4>$50</h4>
                <p className="quantity">
                  Quantity: <input name="" value="1" />
                </p>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Remove</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="assets/images/waterbottle.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>
                  TOPOKO Wide Mouth Water Bottle 40OZ Capacity Stainless Steel
                  Vacuum Insulated Water Bottle
                </h3>
                <h4>$15</h4>
                <p className="quantity">
                  Quantity: <input name="" value="1" />
                </p>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Remove</span>
                </p>
              </div>
            </div>
          </div>
          <div className="price-details">
            <p>
              <span>Subtotal</span> <span>$120</span>
            </p>
            <hr />
            <p>
              <span>Tax</span> <span>$6</span>
            </p>
            <hr />
            <p>
              <span>Shipping Cost</span> <span>$15</span>
            </p>
            <hr />
            <p>
              <span>
                <b>Total</b>
              </span>{" "}
              <span>
                <b>$141</b>
              </span>
            </p>
            <Link to="/payment">
              <i className="fa fa-shopping-cart"></i>Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
