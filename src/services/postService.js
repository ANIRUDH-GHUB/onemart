import { postsSvc, hostName } from "../constants/ApiEndPoints";

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
