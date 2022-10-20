import React from "react";

const BusinessCreateAdd = () => {
  return (
    <section className="vh-500" style={{ backgroundColor: "#232659" }}>
      <div className="login-container py-5 h-100">
        <div className="login-card" style={{ borderRadius: "1rem" }}>
          <div className="card-stack">
            <div className="card-item">
              <object
                data="/asset/icons/login.svg"
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
                      Create New Advertisement
                    </span>
                  </div>

                  <div className="form-control">
                    <input
                      type="email"
                      id="form2Example17"
                      className=""
                      placeholder="Enter the Advertiser here..."
                    />
                    <label className="form-label" for="form2Example17">
                      Advertiser name
                    </label>
                  </div>

                  <div className="form-control">
                    <input
                      type="text"
                      id="form2Example27"
                      className=""
                      placeholder="Enter the Ad Description here.."
                    />
                    <label className="form-label" for="form2Example27">
                      Ad Description
                    </label>
                  </div>

                  <div className="form-control">
                    <input
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      placeholder="Upload Ad Image.."
                    />
                    <label className="form-label" for="form2Example27">
                      Ad Image
                    </label>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
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

export default BusinessCreateAdd;
