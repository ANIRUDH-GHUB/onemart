import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "../../common/LoadingButton";
import { userRole } from "../../constants/constants";
import {
  deleteUser,
  getAllUsers,
  getAllUsersByRole,
  updateUserDetails,
} from "../../services/userService";
import { alertMessage } from "../../util/util";
import "./SuperManageSudents.css";

const SuperManage = ({ role }) => {
  const [users, setUsers] = useState([]);
  const [usersRoles, setUsersByRoles] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [isEditing, setEditing] = useState(false);
  const [values, setValues] = useState({
    username: "",
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    dob: "",
    role: "",
  });

  const onDelete = async (user) => {
    const newList = users.filter((item) => item.id !== user.id);
    setDataLoading(true);
    const res = await deleteUser(user.id);
    setDataLoading(false);
    alertMessage(res?.message);
    setUsers(newList);
  };

  const onUpdate = async (event) => {
    setDataLoading(true);
    const res = await updateUserDetails(values);
    setDataLoading(false);
    alertMessage(res?.message);
    setEditing(false);
  };

  const onEdit = (user) => {
    console.log(user);
    setValues({
      ...values,
      ...user,
    });
    setEditing(true);
  };

  const onCancel = () => {
    setEditing(false);
  };

  const isValidEmail = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  };

  const handleChange = (event, prop) => {
    if (prop === "email") {
      event.target.style.background = isValidEmail(event.target.value)
        ? "#ffffff"
        : "#dc3545";
    }
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    async function fetchData() {
      let res1 = await getAllUsers();
      let res2 = await getAllUsersByRole();

      if (res1) setDataLoading(false);
      // res1.map((item, index)=>{

      // })
      res1 = res1.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name));
      res2 = res2.sort((a, b) => a.id - b.id || a.name.localeCompare(b.name));
      setUsers(
        res1.map((item, index) => {
          return { ...res2[index], ...item.acf };
        })
      );
      // setUsersByRoles(res2);
    }
    fetchData();
  }, [isEditing]);
  return (
    <div id="demo">
      <div class="container">
        <div className="table-responsive-vertical shadow-z-1">
          <h1 style={{ textTransform: "capitalize" }}>{userRole?.[role]}</h1>
          <LoadingButton
            isLoading={dataLoading}
            onClick={onCancel}
            sx={{ float: "right", margin: "10px" }}
          >
            Add User
          </LoadingButton>
          <table id="table" className="table table-hover table-mc-light-blue">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) => user.role === role)
                .map((user) => (
                  <tr>
                    <td data-title="ID">{user.id}</td>
                    <td data-title="Name">{user.name}</td>
                    <td data-title="Link">{user.email}</td>
                    <td data-title="Status">{userRole?.[user.role]}</td>
                    <td data-title="Options">
                      <i
                        className="fa fa-edit"
                        onClick={() => onEdit(user)}
                      ></i>
                      <i
                        className="fa fa-trash"
                        onClick={() => onDelete(user)}
                      ></i>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="edit-user" id="edit-user">
          <h1 style={{ textAlign: "start" }}>
            {isEditing ? `Editing ${values.name}` : "Create New"}
          </h1>
          <div className="card-item">
            <div className="card-body p-4 p-lg-5 text-black">
              <form>
                <div className="form-control">
                  <input
                    value={values.name}
                    type="text"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "name")}
                  />
                  <label className="form-label">Name</label>
                </div>
                <div className="form-control">
                  <input
                    value={values.dob}
                    type="date"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "dob")}
                  />
                  <label className="form-label">DOB</label>
                </div>
                <div className="form-control">
                  <input
                    value={values.address}
                    type="text"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "address")}
                  />
                  <label className="form-label">Address</label>
                </div>
                <div className="form-control">
                  <input
                    value={values.contact}
                    type="text"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "contact")}
                  />
                  <label className="form-label">Contact</label>
                </div>
                <div className="form-control">
                  <input
                    value={values.email}
                    type="mail"
                    id="form2Example17"
                    onChange={(e) => handleChange(e, "email")}
                  />
                  <label className="form-label">Email Address</label>
                </div>
                <div className="form-control" value={values.role}>
                  <select
                    name="cars"
                    id="cars"
                    value={values.role}
                    onChange={(e) => handleChange(e, "role")}
                  >
                    <option value="author">Student</option>
                    <option value="contributor">Business Owner</option>
                    <option value="editor">School Admin</option>
                  </select>

                  <label className="form-label">Role</label>
                </div>

                {!isEditing && (
                  <div className="form-control">
                    <input
                      value={values.password}
                      type="password"
                      id="form2Example27"
                      onChange={(e) => handleChange(e, "password")}
                    />
                    <label className="form-label" for="form2Example27">
                      Password
                    </label>
                  </div>
                )}
              </form>
            </div>
          </div>
          <div class="btn-wrapper">
            <LoadingButton
              isLoading={dataLoading}
              onClick={onCancel}
              sx={{ textAlign: "center", backgroundColor: "#dd7973" }}
            >
              Cancel
            </LoadingButton>
            <LoadingButton
              isLoading={dataLoading}
              onClick={onUpdate}
              sx={{ textAlign: "center", backgroundColor: "#33b249" }}
            >
              Apply
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperManage;
