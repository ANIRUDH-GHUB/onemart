import React from "react";
import { Link } from "react-router-dom";

const StudentPosts = () => {
  return (
    <section
      className="vh-500 product_bo"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>My Posts</h1>
        <div className="cart">
          <div className="cartproducts">
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/web3.JPG" alt="ok" />
              </div>
              <div className="description">
                <h3>Web 3.0</h3>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">DELETE</span>
                </p>
              </div>
            </div>
            <div>
              <Link to="create" className="view-more create-new">
                Create new Post
              </Link>
            </div>
            <h1>Explore Posts</h1>
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/dataBreach.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Data Breach</h3>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Read More</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/lifeSciences.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Life Sciences</h3>
                <p className="btn-remove">
                  {" "}
                  <span class="btn2">Read More</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/halloween.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Halloween</h3>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Read More</span>
                </p>
              </div>
            </div>
            <div className="product">
              <div className="pdt_img">
                <img src="/assets/images/bigdata.jpg" alt="ok" />
              </div>
              <div className="description">
                <h3>Big Data</h3>
                <p className="btn-remove">
                  {" "}
                  <span className="btn2">Read More</span>
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

export default StudentPosts;
