import { hostName, productSvc } from "../constants/ApiEndPoints";

export const registerProduct = async (values, image) => {
  const prodcutUrl = hostName + productSvc;

  const eventObj = {
    acf: {
      ...values,
      title: values?.name,
      image: image,
      owner: localStorage.getItem("user_id"),
    },
    status: "publish",
  };
  const data = await fetch(prodcutUrl, {
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

export const getAllProducts = async () => {
  const prodcutUrl = hostName + productSvc;

  const data = await fetch(prodcutUrl, {
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

export const getAllProductsById = async (id) => {
  const res = await getAllProducts();
  return res?.filter((product) => product?.acf?.owner === id);
};

export const deleteProductById = async (id) => {
  const prodcutUrl = hostName + productSvc + "/" + id;

  const data = await fetch(prodcutUrl, {
    method: "DELETE",
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
