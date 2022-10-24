import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../component/Sidebar/Sidebar";

const StudentHome = () => {
  return (
    <div className="homepage_bo">
      <Sidebar />
      <section>
        <div className="herosection" id="home">
          <div className="hero-container">
            <img
              src="./asset/images/starbucks-open.jpg"
              alt=""
              className="hero-image"
            />

            <div className="hero-content">
              <h1 className="display-1">
                One Shop <br /> for all your needs
              </h1>
            </div>
          </div>
        </div>

        <div className="outer-container" id="outer-container">
          <div className="left-side-container">
            <div className="card-heading">Products</div>
            <div className="productshome">
              <div className="card-container">
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/machito.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>StarBucks</h1>
                    <h4>Caramel Machiato</h4>
                  </div>
                </div>
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/mandm.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>MarketPlace</h1>
                    <h4>M&M</h4>
                  </div>
                </div>
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/sandwich.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>Subways</h1>
                    <h4>FootLong Sandwich</h4>
                  </div>
                </div>
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/chikfila.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>Chik-Fil-A</h1>
                    <h4>Chicken Sandwich</h4>
                  </div>
                </div>
              </div>
              <div className="view-more">
                <Link to="products" target="_blank">
                  View More
                </Link>
              </div>
            </div>

            <div className="card-heading">Clubs</div>
            <div className="placeshome">
              <div className="card-container">
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/unity2.JPG"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>MAV INVOLVE</h1>
                  </div>
                </div>
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/freeSpeech.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>FREE SPEECH</h1>
                  </div>
                </div>
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/womensclub.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>WOMEN SOCIAL CLUB</h1>
                  </div>
                </div>
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/helpingHand.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>HELPING HAND</h1>
                  </div>
                </div>
              </div>
              <div className="view-more">
                <Link to="clubs" target="_blank">
                  View More
                </Link>
              </div>
            </div>

            <div className="card-heading">Posts</div>
            <div className="placeshome">
              <div className="card-container">
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/lifeSciences.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>John Doe</h1>
                    <h4>Life Sciences</h4>
                  </div>
                </div>
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/dataBreach.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>Marx Karl</h1>
                    <h4>Data Breach</h4>
                  </div>
                </div>
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/web3.JPG"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>Krishna Mohan</h1>
                    <h4>Web 3.0</h4>
                  </div>
                </div>
                <div
                  className="card-item"
                  style={{
                    backgroundImage: `url(${"./asset/images/halloween.jpg"})`,
                  }}
                >
                  <div className="card-content">
                    <h1>Riya Carles</h1>
                    <h4>Halloween</h4>
                  </div>
                </div>
              </div>
              <div className="view-more">
                <Link to="posts" target="_blank">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="right-side-container">
            <div className="advertisement">
              <img src="/asset/images/adbo.jpg" alt="starbucks" />
              <p>Grab your Deals NOW!!!</p>
            </div>
          </div>
        </div>
      </section>
      <div className="fixed-bottom">
        <div className="chat">CHAT!!!</div>
      </div>
    </div>
  );
};

export default StudentHome;
