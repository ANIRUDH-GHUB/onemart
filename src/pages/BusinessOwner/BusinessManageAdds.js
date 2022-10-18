import React from "react";
import CardList from "../../component/CardList/CardList";
import adds from "./../../model/business/adds.json";

const BusinessManageAdds = () => {
  return (
    <section className="vh-500" style={{ backgroundColor: "#232659" }}>
      <div className="wrapper">
        <h1>My Advertisements</h1>
        <CardList propList={adds} />
      </div>
    </section>
  );
};

export default BusinessManageAdds;
