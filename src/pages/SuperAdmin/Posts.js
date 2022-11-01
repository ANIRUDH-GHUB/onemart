import React, { useEffect, useState } from "react";
import LoadingButton from "../../common/LoadingButton";
import { addPostSvc, hostName } from "../../constants/ApiEndPoints";
import { getAllPosts } from "../../services/postService";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const onDelete = (index) => {
    const newList = posts.filter((item, ind) => ind !== index);
    setPosts(newList);
  };
  const canDelete = (item) =>
    localStorage.getItem("user_role") === "superadmin" ||
    item?.author === localStorage.getItem("user_id");

  const getPostUrl = (slug) => `${hostName}/${slug}`;
  useEffect(() => {
    async function fetchData() {
      const res = await getAllPosts();
      setPosts(res);
    }
    fetchData();
  }, []);
  return (
    <section
      className="product_bo managePosts"
      style={{ backgroundColor: "#232659" }}
    >
      <div className="wrapper">
        <h1>Posts</h1>
        <div className="cart">
          <div className="cartproducts">
            {posts?.map((item, index) => (
              <div className="product" key={item.id}>
                <div className="pdt_img">
                  <img
                    src={
                      item?.featured_image?.large
                        ? item?.featured_image?.large
                        : "/app/asset/images/default-post.png"
                    }
                    alt="ok"
                  />
                </div>
                <div className="description">
                  <h3>{item.title}</h3>
                  <h4 dangerouslySetInnerHTML={{ __html: item?.content }}></h4>
                </div>
                <div className="button-wrapper">
                  <a href={getPostUrl(item?.slug)}>
                    <LoadingButton>Read</LoadingButton>
                  </a>
                  {canDelete(item) && (
                    <LoadingButton
                      onClick={() => onDelete(index)}
                      sx={{ backgroundColor: "#dc3545" }}
                    >
                      Delete
                    </LoadingButton>
                  )}
                </div>
              </div>
            ))}
            <div>
              <a
                href={hostName + addPostSvc}
                className="view-more create-new"
                target="_blank"
              >
                Add new
              </a>
            </div>
          </div>

          <div className="price-details">
            <img src="/app/asset/images/waterbottle.jpg" alt="waterbottle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
