import { hostName, registerSvc, usersSvc } from "../constants/ApiEndPoints";

export const getAllUsers = async () => {
  const usersUrl = hostName + usersSvc;
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
    body: JSON.stringify({ reassign: 0 }),
  })
    .then((response) => response.json())
    .then((res) => {
      if (
        res?.data?.status === 400 ||
        res?.code === "existing_user_login" ||
        res?.code === "existing_user_email"
      ) {
        return {
          success: false,
          message: res?.message,
        };
      } else {
        return {
          success: true,
          message: "User deleted successfully",
        };
      }
    })
    .catch((error) => console.log("Error"));
  return data;
};

export const updateUserDetails = async (body) => {
  console.log(body);
  const userObj = {
    first_name: body?.first_name || "",
    last_name: body?.last_name || "",
    email: body?.email || "",
    roles: [body?.role || ""],
    acf: {
      dob: body?.dob || "",
      address: body?.address || "",
      avatar: "https://www.bootdey.com/img/Content/avatar/avatar1.png",
    },
  };

  if (body.password) userObj.password = body.password;
  const token = localStorage.getItem("admin_token");
  const registerUrl = hostName + registerSvc + "/" + body.id;
  const data = await fetch(registerUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      if (
        res?.data?.status === 400 ||
        res?.code === "existing_user_login" ||
        res?.code === "existing_user_email"
      ) {
        return {
          success: false,
          message: res?.message,
        };
      } else {
        return {
          success: true,
          message: "User updated successfully",
        };
      }
    })
    .catch((err) => err);
  return data;
};
