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
import Cart from "../pages/Cart/Cart";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SchoolAdmin from "../pages/SchoolAdmin/SchoolAdmin";
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
import { fetchUserRole } from "../util/util";

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
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManageBusiness />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreateBusiness />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="posts">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManagePosts />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreatePosts />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="clubs">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManageClubs />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreateClubs />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="schools">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManageSchools />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreateSchools />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="students">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManageStudents />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreateStudent />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
        <Route path="schooladmin">
          <Route
            path=""
            element={
              <ProtectedRoute role={userRole.schooladmin}>
                <SchoolAdmin />
              </ProtectedRoute>
            }
          />
          <Route path="business">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManageBusiness />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreateBusiness />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="posts">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManagePosts />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreatePosts />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="clubs">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManageClubs />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreateClubs />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="students">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManageStudents />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreateStudent />
                </ProtectedRoute>
              }
            />
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
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <BusinessManageProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="sell"
              element={
                <ProtectedRoute role={userRole.student}>
                  <BusinessSellProducts />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="posts">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperManagePosts />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreatePosts />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="adds">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <BusinessManageAdds />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <BusinessCreateAdd />
                </ProtectedRoute>
              }
            />
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
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <StudentProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="sell"
              element={
                <ProtectedRoute role={userRole.student}>
                  <BusinessSellProducts />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="posts">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <StudentPosts />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <SuperCreatePosts />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="clubs">
            <Route
              path=""
              element={
                <ProtectedRoute role={userRole.student}>
                  <StudentClubs />
                </ProtectedRoute>
              }
            />
            <Route
              path="create"
              element={
                <ProtectedRoute role={userRole.student}>
                  <StudenCreateClub />
                </ProtectedRoute>
              }
            />
          </Route>
        </Route>
        <Route path="forgot" element={<ForgotPassword />} />

        <Route
          path="cart"
          element={
            <ProtectedRoute role={fetchUserRole()}>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="payment"
          element={
            <ProtectedRoute role={fetchUserRole()}>
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
