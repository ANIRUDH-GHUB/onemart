import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { page } from "../../constants/constants";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const role = localStorage.getItem("user_role");
    if (Object.keys(page).includes(role)) {
      navigate(page[role]);
    }
  });
  return (
    <section className="vh-100" style={{ backgroundColor: "#232659" }}>
      <div className="login-container py-5 h-100">
        <div className="login-card" style={{ borderRadius: "1rem" }}>
          <div className="card-stack">
            <div className="card-item">
              <object
                data="./assets/icons/register.svg"
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
                    Create your account
                  </h5>

                  <div className="form-control">
                    <input type="text" id="form2Example17" className="" />
                    <label className="form-label" for="form2Example17">
                      Name
                    </label>
                  </div>
                  <div className="form-control">
                    <input type="date" id="form2Example17" className="" />
                    <label className="form-label" for="form2Example17">
                      DOB
                    </label>
                  </div>
                  <div className="form-control">
                    <input type="text" id="form2Example17" className="" />
                    <label className="form-label" for="form2Example17">
                      Address
                    </label>
                  </div>
                  <div className="form-control">
                    <input type="text" id="form2Example17" className="" />
                    <label className="form-label" for="form2Example17">
                      Contact
                    </label>
                  </div>
                  <div className="form-control">
                    <input type="mail" id="form2Example17" className="" />
                    <label className="form-label" for="form2Example17">
                      Email Address
                    </label>
                  </div>

                  <div className="form-control">
                    <input type="password" id="form2Example27" className="" />
                    <label className="form-label" for="form2Example27">
                      Password
                    </label>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <button className="login-button" type="button">
                      Sign up
                    </button>
                  </div>

                  <p style={{ color: "#393f81" }}>
                    Have an account?
                    <Link to="/login" style={{ color: "#393f81" }}>
                      Login here
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

export default Register;
