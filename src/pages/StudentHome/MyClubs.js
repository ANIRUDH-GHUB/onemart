import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import CardList from "../../component/CardList/CardList";
import Loading from "../../common/Loading";
import { getAllClubsById } from "../../services/clubService";

const MyProducts = () => {
  const [clubs, setClubs] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await getAllClubsById(localStorage.getItem("user_id"));
      if (res) setDataLoading(false);
      setClubs(res);
    }
    fetchData();
  }, []);

  const ownerProduct = (clubs) => clubs.map((product) => product.acf);
  return (
    <section
      className="vh-500 product_bo"
      style={{ backgroundColor: "#232659" }}
    >
      <Sidebar />

      <div className="wrapper">
        <h1>My Clubs</h1>
        <div className="cart">
          <div className="cartproducts">
            <Loading height={130} isLoading={dataLoading} count={3}>
              <CardList propList={ownerProduct(clubs)} sell={true} />
            </Loading>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProducts;
