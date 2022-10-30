import { hostName, registerSvc } from "../constants/ApiEndPoints";

export const getAllUsers = async () => {
  const usersUrl = hostName + registerSvc;
  let data = await fetch(usersUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("admin_token"),
    },
  })
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => console.log("Error"));
  return data;
};

export const deleteUser = async (id) => {
  const usersUrl = `${hostName}${registerSvc}/${id}`;
  let data = await fetch(usersUrl, {
    method: "DELETE",
    Authorization: "Bearer " + localStorage.getItem("admin_token"),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((res) => res)
    .catch((error) => console.log("Error"));
  return data;
};
