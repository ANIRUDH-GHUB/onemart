import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../common/Loading";
import Sidebar from "../../component/Sidebar/Sidebar";
import { addToCart } from "../../state/slices/cartSlice";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllClubs } from "../../services/clubService";

const Products = () => {
  const [clubs, setClubs] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const res = await getAllClubs();
      if (res) setDataLoading(false);
      setClubs(res);
    }
    fetchData();
  }, []);

  const allProducts = (clubs) => clubs.map((club) => club.acf);

  const onBuyorReturn = (e, item) => {
    e.target.style.backgroundColor = "#aaaaaa";
    e.target.style.pointerEvents = "none";

    dispatch(addToCart(item));
  };

  return (
    <section
      className="vh-500 product_bo"
      style={{ backgroundColor: "#232659" }}
    >
      <Sidebar />
      <div className="wrapper">
        <div className="cart">
          <div className="cartproducts">
            <h1>Explore Clubs</h1>
            <Loading height={130} isLoading={dataLoading} count={3}>
              {allProducts(clubs).map((item) => (
                <div className="product">
                  <div className="pdt_img">
                    <img src={item?.image} alt="ok" />
                  </div>
                  <div className="description">
                    <h2>{item?.name}</h2>
                    <h5>{item?.description}</h5>
                    <p
                      className="btn-remove"
                      onClick={(e) => onBuyorReturn(e, item)}
                    >
                      {" "}
                      <span className="btn2">Join</span>
                    </p>
                  </div>
                </div>
              ))}
            </Loading>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
