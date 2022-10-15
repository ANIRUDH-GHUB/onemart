import React from "react";
import Places from "../Places/Places";
import Products from "../Products/Products";
import svg from "./../../assets/icons/heroicon.svg";

const Herosection = () => {
  return (
    <div className="herosection" id="home">
      <div className="hero-container">
        <object data={svg} type="image/svg+xml" className="hero-image"></object>
        {/* <img src={svg} /> */}
        <div className="hero-content">
          <h1 className="display-1">One Shop for all your needs</h1>
        </div>
      </div>
      <Products />
      <Places />
    </div>
  );
};

export default Herosection;
