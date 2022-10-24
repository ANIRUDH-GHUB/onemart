import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar";

const MyClubs = () => {
  return (
    <section class="vh-500 product_bo" style={{ backgroundColor: "#232659" }}>
      <Sidebar />

      <div class="wrapper">
        <h1>My Clubs</h1>
        <div class="cart">
          <div class="cartproducts">
            <div class="product">
              <div class="pdt_img">
                <img src="/asset/images/unity.JPG" alt="ok" />
              </div>
              <div class="description">
                <h3>Mav Involve</h3>
                <p class="btn-remove">
                  {" "}
                  <span class="btn2">DELETE</span>
                </p>
              </div>
            </div>
            <div>
              <Link to="/student/clubs/create" class="view-more create-new">
                Create new Club
              </Link>
            </div>
          </div>

          <div class="price-details">
            <img src="/asset/images/adbo1.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyClubs;
