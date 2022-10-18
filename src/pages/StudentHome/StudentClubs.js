import React from "react";
import { Link } from "react-router-dom";

const StudentClubs = () => {
  return (
    <section class="vh-500" style={{ backgroundColor: "#232659" }}>
      <div class="wrapper">
        <h1>My Clubs</h1>
        <div class="cart">
          <div class="cartproducts">
            <div class="product">
              <div class="pdt_img">
                <img src="/assets/images/unity.JPG" alt="ok" />
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
              <Link to="create" class="view-more create-new">
                Create new Club
              </Link>
            </div>
            <h1>Other Clubs</h1>
            <div class="product">
              <div class="pdt_img">
                <img src="/assets/images/freeSpeech.jpg" alt="ok" />
              </div>
              <div class="description">
                <h3>Free Speech</h3>
                <p class="btn-remove">
                  {" "}
                  <span class="btn2">Leave</span>
                </p>
              </div>
            </div>
            <h1>Explore Clubs</h1>
            <div class="product">
              <div class="pdt_img">
                <img src="/assets/images/dataBreach.jpg" alt="ok" />
              </div>
              <div class="description">
                <h3>Hackathon</h3>
                <p class="btn-remove">
                  {" "}
                  <span class="btn2">Join</span>
                </p>
              </div>
            </div>
            <div class="product">
              <div class="pdt_img">
                <img src="/assets/images/databaseTextbook.jpg" alt="ok" />
              </div>
              <div class="description">
                <h3>Study Mate</h3>
                <p class="btn-remove">
                  {" "}
                  <span class="btn2">Join</span>
                </p>
              </div>
            </div>
          </div>

          <div class="price-details">
            <img src="/assets/images/adbo1.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentClubs;
