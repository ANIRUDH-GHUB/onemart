import React from "react";

const SuperCreateStudent = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#232659" }}>
      <div className="login-container py-5 h-100">
        <div className="login-card" style={{ borderRadius: "1rem" }}>
          <div className="card-stack">
            <div className="card-item">
              <object
                data="/assets/icons/login.svg"
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
                    <span className="h1 fw-bold mb-0">
                      Create New Student Profile
                    </span>
                  </div>

                  <div className="form-control">
                    <input
                      type="email"
                      id="form2Example17"
                      className=""
                      placeholder="Enter the Student here..."
                    />
                    <label className="form-label" for="form2Example17">
                      Student Name
                    </label>
                  </div>

                  <div className="form-control">
                    <input
                      type="text"
                      id="form2Example27"
                      className=""
                      placeholder="Enter the branch here.."
                    />
                    <label className="form-label" for="form2Example27">
                      Branch Name
                    </label>
                  </div>

                  <div stye={{ marginBottom: "10px" }}>
                    <button className="login-button" type="button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperCreateStudent;
