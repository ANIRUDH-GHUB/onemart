import React from "react";
import CardList from "../../component/CardList/CardList";
import posts from "../../model/superadmin/posts.json";

const SuperManagePosts = () => {
  return (
    <section
      className="product_bo managePosts"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>posts</h1>
        <CardList propList={posts} />
      </div>
    </section>
  );
};

export default SuperManagePosts;
