import React from "react";
import { Link } from "react-router-dom";

const SuperAdmin = () => {
  return (
    <div>
      <section>
        <div className="herosection" id="home">
          <div className="hero-container">
            <img
              src="./assets/icons/column-chart-example.svg"
              alt=""
              className="hero-image"
            />
            <div className="hero-rightside-admin">
              <div className="all-analytics">
                <h2>Total Number of Business owners</h2>
                <h4>146</h4>
              </div>
              <div className="all-analytics">
                <h2>Total Number of Clubs</h2>
                <h4>1200</h4>
              </div>
              <div className="all-analytics">
                <h2>Total Number of Products</h2>
                <h4>48</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="outer-container-admin" id="outer-container">
          <div className="manage-btn view-more">
            <Link to="posts">Manage Posts</Link>
          </div>
          <div className="manage-btn view-more">
            <Link to="clubs">Manage Clubs</Link>
          </div>
          <div className="manage-btn view-more">
            <Link to="students">Manage Students</Link>
          </div>
          <div className="manage-btn view-more">
            <Link to="business">Manage Businesses</Link>
          </div>
          <div className="manage-btn view-more">
            <Link to="schools">Manage Schools</Link>
          </div>
        </div>
      </section>

      <div className="fixed-bottom">
        <div className="chat">CHAT!!!</div>
      </div>
    </div>
  );
};

export default SuperAdmin;
