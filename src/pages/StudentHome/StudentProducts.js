import React from "react";
import { Link } from "react-router-dom";

const StudentProducts = () => {
  return (
    <section
      className="vh-500 product_bo"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>My Products</h1>
        <div className="cart">
          <div className="cartproducts">
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/sofa.jpg" alt="ok" />
              </div>
              <div className="description">
                <h2>Furniture - Sofa</h2>
                <h5>$19</h5>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">DELETE</span>
                </p>
              </div>
            </div>
            <div>
              <Link to="sell" className="view-more create-new">
                Sell Product
              </Link>
            </div>
            <h1>Products Purchased</h1>
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/studyLamp.jpg" alt="ok" />
              </div>
              <div className="description">
                <h2>Study Lamp</h2>
                <h5>$5</h5>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Return</span>
                </p>
              </div>
            </div>
            <h1>Explore Products</h1>
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/databaseTextbook.jpg" alt="ok" />
              </div>
              <div className="description">
                <h2>TextBook</h2>
                <h5>$6</h5>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Buy</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/dataBreach.jpg" alt="ok" />
              </div>
              <div className="description">
                <h2>Laptop</h2>
                <h5>$98</h5>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Buy</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/notepad.jpg" alt="ok" />
              </div>
              <div className="description">
                <h2>Notepad</h2>
                <h5>$15</h5>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Buy</span>
                </p>
              </div>
            </div>
          </div>

          <div className="price-details">
            <img src="/assets/images/adbo1.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProducts;
