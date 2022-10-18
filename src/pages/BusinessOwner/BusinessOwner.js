import React from "react";
import { Link } from "react-router-dom";

const BusinessOwner = () => {
  return (
    <section>
      <div class="herosection" id="home">
        <div class="hero-container">
          <img
            src="/assets/images/starbucks-open.jpg"
            alt=""
            class="hero-image"
          />

          <div class="hero-content">
            <h1 class="display-1">
              One Shop <br /> for all your needs
            </h1>
          </div>
        </div>
      </div>

      <div class="outer-container" id="outer-container">
        <div class="left-side-container">
          <div class="card-heading">Products</div>
          <div class="productshome">
            <div class="card-container">
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/starbucks3.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>StarBucks</h1>
                  <h4>Cappuccino</h4>
                </div>
              </div>
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/starbucks2.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>StarBucks</h1>
                  <h4>Machito Coffee</h4>
                </div>
              </div>
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/starbucks1.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>StarBucks</h1>
                  <h4>Frappuccino</h4>
                </div>
              </div>

              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/starbucks4.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>StarBucks</h1>
                  <h4>Caramel Coffee</h4>
                </div>
              </div>
              <div class="view-more">
                <Link to="products">View More</Link>
              </div>
            </div>
          </div>

          <div class="card-heading">Posts</div>
          <div class="placeshome">
            <div class="card-container">
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/lifeSciences.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>John Doe</h1>
                  <h4>Life Sciences</h4>
                </div>
              </div>
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/dataBreach.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>Marx Karl</h1>
                  <h4>Data Breach</h4>
                </div>
              </div>
              <div
                class="card-item"
                style={{ backgroundImage: `url(${"/assets/images/web3.JPG"})` }}
              >
                <div class="card-content">
                  <h1>Krishna Mohan</h1>
                  <h4>Web 3.0</h4>
                </div>
              </div>
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/halloween.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>Riya Carles</h1>
                  <h4>Halloween</h4>
                </div>
              </div>
              <div class="view-more">
                <Link to="posts">View More</Link>
              </div>
            </div>
          </div>

          <div class="card-heading">Advertisements</div>
          <div class="placeshome">
            <div class="card-container">
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/starbucks.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>StarBucks</h1>
                  <h4>Fiesta Frappuccino</h4>
                </div>
              </div>
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/starbucks1.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>StarBucks</h1>
                  <h4>Japan's Melon Frappuccino</h4>
                </div>
              </div>
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/starbucks2.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>StarBucks</h1>
                  <h4>Machito Coffee</h4>
                </div>
              </div>
              <div
                class="card-item"
                style={{
                  backgroundImage: `url(${"/assets/images/starbucks3.jpg"})`,
                }}
              >
                <div class="card-content">
                  <h1>StarBucks</h1>
                  <h4>Unicorn Frappuccino</h4>
                </div>
              </div>
              <div class="view-more">
                <Link to="adds">View More</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="right-side-container">
          <div class="advertisement">
            <img src="/assets/images/adbo1.jpg" alt="adbo" />
            <p> Grab your Deak NOW!! </p>
          </div>
          <div class="view-more advertise-btn">
            <a href="bocreateAdvertisement.html" target="_blank">
              Advertise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOwner;
