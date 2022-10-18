import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogContext } from "../../context";
import "./Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(LogContext);
  useEffect(() => {
    console.log(isLoggedIn);
  });
  const handleLogout = () => {
    localStorage.removeItem("user_role");
    setIsLoggedIn(false);
  };
  const fetchUserRole = () => localStorage.getItem("user_role");

  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="navbar-container">
          <a href="#" className="navbar-brand">
            <img src="/assets/icons/logo.svg" />
          </a>
          <button className="nav-toggler" id="navToggler">
            <span className="burger-icon"></span>
          </button>
          <div className="nav-collapse collapse" id="navList">
            <ul className="nav-list">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="dropbtn">My Profile</button>
                    <div className="dropdown-content">
                      <Link to={fetchUserRole()}>Profile</Link>
                      <a href="./mycart.html">My Cart</a>
                      <Link to="/" onClick={handleLogout}>
                        Sign Out
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <>
                  <li className="nav-item d-flex">
                    <Link className="nav-link" to="login">
                      <button type="button" className="btn btn-success">
                        Login
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item d-flex">
                    <Link className="nav-link" to="register">
                      <button type="button" className="btn btn-warning">
                        Sign up
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
