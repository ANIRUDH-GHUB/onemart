import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path="/home" element={<Navigate replace to="/" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
