import { postsSvc, hostName, blogSvc } from "../constants/ApiEndPoints";

export const getAllPosts = async (title, content) => {
  const post = hostName + postsSvc;
  const data = await fetch(post, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("admin_token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return data;
};

export const getAllPostsById = async (id) => {
  const res = await getAllPosts();
  return res?.filter((item) => item?.author === id);
};

export const deletePostsById = async (id) => {
  const post = hostName + blogSvc + "/" + id;
  const data = await fetch(post, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("admin_token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data);
  return data;
};
