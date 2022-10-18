import React from "react";

const BusinessSellProducts = () => {
  return (
    <section class="vh-100" style={{ backgroundColor: "#232659" }}>
      <div class="login-container py-5 h-100">
        <div class="login-card" style={{ borderRadius: "1rem" }}>
          <div class="card-stack">
            <div class="card-item">
              <object
                data="/assets/icons/login.svg"
                type="image/svg+xml"
                style={{ width: "100%" }}
              ></object>
            </div>
            <div class="card-item">
              <div class="card-body p-4 p-lg-5 text-black">
                <form>
                  <div class="heading">
                    <i
                      class="fas fa-cubes fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    ></i>
                    <span class="h1 fw-bold mb-0">Sell Product</span>
                  </div>

                  <div class="form-control">
                    <input
                      type="email"
                      id="form2Example17"
                      class=""
                      placeholder="Enter the product name here..."
                    />
                    <label class="form-label" for="form2Example17">
                      Product Name
                    </label>
                  </div>

                  <div class="form-control">
                    <input
                      type="text"
                      id="form2Example27"
                      class=""
                      placeholder="Enter the price here.."
                    />
                    <label class="form-label" for="form2Example27">
                      Price
                    </label>
                  </div>
                  <div class="form-control">
                    <input
                      type="text"
                      id="form2Example27"
                      class=""
                      placeholder="Enter the description here.."
                    />
                    <label class="form-label" for="form2Example27">
                      Product Description
                    </label>
                  </div>

                  <div class="form-control">
                    <input
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      placeholder="Upload Product Image.."
                    />
                    <label class="form-label" for="form2Example27">
                      Product Image
                    </label>
                  </div>

                  <div style={{ marginBottom: "10px" }}>
                    <button class="login-button" type="button">
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

export default BusinessSellProducts;
