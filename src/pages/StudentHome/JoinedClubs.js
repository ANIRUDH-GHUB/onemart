import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";

const JoinedClubs = () => {
  return (
    <section class="vh-500 product_bo" style={{ backgroundColor: "#232659" }}>
      <Sidebar />

      <div class="wrapper">
        <h1>Joined Clubs</h1>
        <div class="cart">
          <div class="cartproducts">
            <div class="product">
              <div class="pdt_img">
                <img src="/asset/images/freeSpeech.jpg" alt="ok" />
              </div>
              <div class="description">
                <h3>Free Speech</h3>
                <p class="btn-remove">
                  {" "}
                  <span class="btn2">Leave</span>
                </p>
              </div>
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

export default JoinedClubs;
