import { hostName, clubsSvc } from "../constants/ApiEndPoints";

export const registerClub = async (values, image) => {
  const clubUrl = hostName + clubsSvc;

  const eventObj = {
    title: values?.name,
    acf: {
      ...values,
      image: image,
      owner: localStorage.getItem("user_id"),
    },
    status: "publish",
  };
  console.log(eventObj);
  const data = await fetch(clubUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("admin_token"),
    },
    body: JSON.stringify(eventObj),
  })
    .then((response) => response.json())
    .then((data) => {
      return {
        success: true,
        message:
          data?.data?.status === 400
            ? "Invalid Parameter"
            : "Successfully created",
      };
    })
    .catch((error) => ({ success: false, message: "Error" }));
  return data;
};

export const getAllClubs = async () => {
  const clubUrl = hostName + clubsSvc;

  const data = await fetch(clubUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("admin_token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((response) => response);
  return data;
};

export const getAllClubsById = async (id) => {
  const res = await getAllClubs();
  return res?.filter((club) => club?.acf?.owner === id);
};
