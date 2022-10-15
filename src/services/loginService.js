import { userRole } from "../constants/constants";
import { credentials } from "../constants/credentials";

export const validateCrentials = (username, password) =>
  credentials.some(
    (item) => item.username === username && item.password === password
  );

export const getUserRole = (username, password) => {
  const item = credentials.find(
    (item) => item.username === username && item.password === password
  );
  return item?.role;
};

export const isUserLoggedIn = () =>
  Object.keys(userRole).includes(localStorage.getItem("user_role"));
