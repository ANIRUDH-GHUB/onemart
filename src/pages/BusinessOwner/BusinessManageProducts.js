import React from "react";
import CardList from "../../component/CardList/CardList";
import productList from "./../../model/business/products.json";

const BusinessManageProducts = () => {
  return (
    <div class="wrapper">
      <h1>My Products</h1>
      <CardList propList={productList} sell={true} />
    </div>
  );
};

export default BusinessManageProducts;
