import React from "react";
import CardStack from "../CardStack/CardStack";
import svg from "./../../asset/icons/heroicon.svg";

const Herosection = () => {
  const productList = [
    {
      label: "StarBucks",
      image: "./asset/images/machito.jpg",
      description: "Machito Coffee",
    },
    {
      label: "M & M",
      image: "./asset/images/mandm.jpg",
      description: "Chocolate",
    },
    {
      label: "Subway",
      image: "./asset/images/sandwich.jpg",
      description: "Footlong",
    },
  ];

  const placeList = [
    {
      label: "Subway",
      image: "./asset/images/subway-open.jpg",
      description: "Footlong",
    },
    {
      label: "StarBucks",
      image: "./asset/images/starbucks-open.jpg",
      description: "Machito Coffee",
    },
    {
      label: "Chick Fil A",
      image: "./asset/images/chick-fil-a.jpg",
      description: "Open",
    },
  ];
  return (
    <div className="herosection" id="home">
      <div className="hero-container">
        <object data={svg} type="image/svg+xml" className="hero-image"></object>
        <div className="hero-content">
          <h1 className="display-1">One Shop for all your needs</h1>
        </div>
      </div>
      <CardStack heading="Top Products" list={productList} />
      <CardStack heading="Top Places" list={placeList} />
    </div>
  );
};

export default Herosection;
