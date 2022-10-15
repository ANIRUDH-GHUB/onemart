import React from "react";
import "./../../";

const Products = () => {
  const productList = [
    {
      label: "StarBucks",
      image: "./assets/images/machito.jpg",
      description: "Machito Coffee",
    },
    {
      label: "M & M",
      image: "./assets/images/mandm.jpg",
      description: "Chocolate",
    },
    {
      label: "Subway",
      image: "./assets/images/sandwich.jpg",
      description: "Footlong",
    },
  ];
  return (
    <div className="products">
      <div className="card-heading">Top Products</div>
      <div className="card-container">
        {productList.slice(0, 3)?.map((item) => (
          <div
            className="card-item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="card-content">
              <h1>{item.label}</h1>
              <h4>{item.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
