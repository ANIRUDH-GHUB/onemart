import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "../../common/Loading";
import Sidebar from "../../component/Sidebar/Sidebar";
import { addToCart } from "../../state/slices/cartSlice";
import "react-loading-skeleton/dist/skeleton.css";
import { getAllOrdersById } from "../../services/orderService";
import moment from "moment";
import { getAllProducts } from "../../services/productService";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let res = await getAllOrdersById(localStorage.getItem("user_id"));
      setOrders(res);
      res = await getAllProducts();
      setProducts(res);
      setDataLoading(false);
    }
    fetchData();
  }, []);

  const ownerProduct = (products) => products.map((product) => product.acf);

  const getProductByOrder = () => {
    let finalProducts = [];
    orders?.forEach((order) => {
      products?.forEach((product) => {
        if (`${product.id}` === order.acf.productid) {
          finalProducts.push({ ...product, date: order?.date });
        }
      });
    });
    return finalProducts;
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
            <h1>Orders</h1>
            <Loading height={130} isLoading={dataLoading} count={3}>
              {ownerProduct(getProductByOrder()).map((item, index) => (
                <div className="product">
                  <div className="pdt_img">
                    <img src={item.image} alt="ok" />
                  </div>
                  <div className="description">
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                    <h5>${item.price}</h5>
                    <p className="btn-remove">
                      {" "}
                      <span className="btn2">
                        {moment(item?.date).format("DD MMM YYYY hh:mm a")}
                      </span>
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
