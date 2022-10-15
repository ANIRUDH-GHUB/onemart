import React from "react";
import { Link } from "react-router-dom";
import { navitems } from "../../constants/constants";
import logo from "./../../assets/icons/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="navbar-container">
          <Link to="" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
          <button className="nav-toggler" id="navToggler">
            <span className="burger-icon"></span>
          </button>
          <div className="nav-collapse collapse" id="navList">
            <ul className="nav-list">
              {navitems.map((item) =>
                item.label === "login" || item.label === "register" ? (
                  <li className="nav-item d-flex">
                    <Link className="nav-link" to={item.link}>
                      <button
                        type="button"
                        className={
                          item.label === "login"
                            ? "btn btn-success"
                            : "btn btn-warning"
                        }
                      >
                        {item.label}
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href={"#" + item.link}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
