import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../common/ProtectedRoute";
import Navbar from "../component/Navbar/Navbar";
import { userRole } from "../constants/constants";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import StudentHome from "../pages/StudentHome/StudentHome";
import SuperAdmin from "../pages/SuperAdmin/SuperAdmin";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/superadmin"
          element={
            <ProtectedRoute userRole={[userRole.admin]}>
              <SuperAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student"
          element={
            <ProtectedRoute userRole={[userRole.student]}>
              <StudentHome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
