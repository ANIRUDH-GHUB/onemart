import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../common/ProtectedRoute";
import Navbar from "../component/Navbar/Navbar";
import Payment from "../component/Payment/Payment";
import { userRole } from "../constants/constants";
import BusinessCreateAdd from "../pages/BusinessOwner/BusinessCreateAdd";
import BusinessManageAdds from "../pages/BusinessOwner/BusinessManageAdds";
import BusinessManageProducts from "../pages/BusinessOwner/BusinessManageProducts";
import BusinessOwner from "../pages/BusinessOwner/BusinessOwner";
import BusinessSellProducts from "../pages/BusinessOwner/BusinessSellProducts";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import StudenCreateClub from "../pages/StudentHome/StudenCreateClub";
import StudentClubs from "../pages/StudentHome/StudentClubs";
import StudentHome from "../pages/StudentHome/StudentHome";
import StudentPosts from "../pages/StudentHome/StudentPosts";
import StudentProducts from "../pages/StudentHome/StudentProducts";
import SuperAdmin from "../pages/SuperAdmin/SuperAdmin";
import SuperCreateBusiness from "../pages/SuperAdmin/SuperCreateBusiness";
import SuperCreateClubs from "../pages/SuperAdmin/SuperCreateClubs";
import SuperCreatePosts from "../pages/SuperAdmin/SuperCreatePosts";
import SuperCreateSchools from "../pages/SuperAdmin/SuperCreateSchools";
import SuperCreateStudent from "../pages/SuperAdmin/SuperCreateStudent";
import SuperManageBusiness from "../pages/SuperAdmin/SuperManageBusiness";
import SuperManageClubs from "../pages/SuperAdmin/SupermanageClubs";
import SuperManagePosts from "../pages/SuperAdmin/SuperManagePosts";
import SuperManageSchools from "../pages/SuperAdmin/SuperManageSchools";
import SuperManageStudents from "../pages/SuperAdmin/SuperManageStudents";
import Unathorised from "../pages/Unathorised/Unathorised";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="home" element={<Navigate replace to="/" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="superadmin">
          <Route
            path=""
            element={
              <ProtectedRoute role={userRole.superadmin}>
                <SuperAdmin />
              </ProtectedRoute>
            }
          />
          <Route path="business">
            <Route path="" element={<SuperManageBusiness />} />
            <Route path="create" element={<SuperCreateBusiness />} />
          </Route>
          <Route path="posts">
            <Route path="" element={<SuperManagePosts />} />
            <Route path="create" element={<SuperCreatePosts />} />
          </Route>
          <Route path="clubs">
            <Route path="" element={<SuperManageClubs />} />
            <Route path="create" element={<SuperCreateClubs />} />
          </Route>
          <Route path="schools">
            <Route path="" element={<SuperManageSchools />} />
            <Route path="create" element={<SuperCreateSchools />} />
          </Route>
          <Route path="students">
            <Route path="" element={<SuperManageStudents />} />
            <Route path="create" element={<SuperCreateStudent />} />
          </Route>
        </Route>
        <Route path="businessowner">
          <Route
            path=""
            element={
              <ProtectedRoute role={userRole.businessowner}>
                <BusinessOwner />
              </ProtectedRoute>
            }
          />
          <Route path="products">
            <Route path="" element={<BusinessManageProducts />} />
            <Route path="sell" element={<BusinessSellProducts />} />
          </Route>
          <Route path="posts">
            <Route path="" element={<SuperManagePosts />} />
            <Route path="create" element={<SuperCreatePosts />} />
          </Route>
          <Route path="adds">
            <Route path="" element={<BusinessManageAdds />} />
            <Route path="create" element={<BusinessCreateAdd />} />
          </Route>
        </Route>

        <Route path="student">
          <Route
            path=""
            element={
              <ProtectedRoute role={userRole.student}>
                <StudentHome />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="products">
            <Route path="" element={<StudentProducts />} />
            <Route path="sell" element={<BusinessSellProducts />} />
          </Route>
          <Route path="posts">
            <Route path="" element={<StudentPosts />} />
            <Route path="create" element={<SuperCreatePosts />} />
          </Route>
          <Route path="clubs">
            <Route path="" element={<StudentClubs />} />
            <Route path="create" element={<StudenCreateClub />} />
          </Route>
        </Route>
        <Route
          path="products"
          element={<ProtectedRoute>{/* <Products /> */}</ProtectedRoute>}
        />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route
          path="payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Unathorised />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
