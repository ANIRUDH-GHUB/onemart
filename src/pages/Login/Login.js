import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#232659" }}>
      <div className="login-container py-5 h-100">
        <div className="login-card" style={{ borderRadius: "1rem" }}>
          <div className="card-stack">
            <div className="card-item">
              <object
                data="./assets/icons/login.svg"
                type="image/svg+xml"
                style={{ width: "100%" }}
              ></object>
            </div>
            <div className="card-item">
              <div className="card-body p-4 p-lg-5 text-black">
                <form>
                  <div className="heading">
                    <i
                      className="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    ></i>
                    <span className="h1 fw-bold mb-0">Onemart</span>
                  </div>

                  <h5 className="fw-normal" style={{ letterSpacing: "1px" }}>
                    Sign into your account
                  </h5>

                  <div className="form-control">
                    <input type="email" id="form2Example17" className="" />
                    <label className="form-label">Email address</label>
                  </div>

                  <div className="form-control">
                    <input type="password" id="form2Example27" className="" />
                    <label className="form-label">Password</label>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <button className="login-button" type="button">
                      Login
                    </button>
                  </div>

                  <a className="small" href="#!">
                    Forgot password?
                  </a>
                  <p style={{ color: "#393f81" }}>
                    Don't have an account?
                    <Link to="/register" style={{ color: "#393f81" }}>
                      Register here
                    </Link>
                  </p>
                  <a href="#!" className="small text-muted">
                    Terms of use.
                  </a>
                  <a href="#!" className="small text-muted">
                    Privacy policy
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
