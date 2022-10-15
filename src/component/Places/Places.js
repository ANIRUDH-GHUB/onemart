import React from "react";

const Places = () => {
  const productList = [
    {
      label: "Subway",
      image: "./assets/images/subway-open.jpg",
      description: "Footlong",
    },
    {
      label: "StarBucks",
      image: "./assets/images/starbucks-open.jpg",
      description: "Machito Coffee",
    },
    {
      label: "Chick Fil A",
      image: "./assets/images/chick-fil-a.jpg",
      description: "Open",
    },
  ];
  return (
    <div className="places">
      <div className="card-heading">Top Places</div>
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

export default Places;
