import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./util";
import { fetchUserRole } from "../../util/util";
import { page } from "../../constants/constants";

const Payment = () => {
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
  const [number, setNumber] = useState("");
  const [paid, setPaid] = useState(false);
  const navigate = useNavigate();

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  useEffect(() => {
    if (paid) {
      setTimeout(() => {
        navigate(page[fetchUserRole()]);
      }, 5000);
    }
  }, [paid]);

  return (
    <section className="vh-100" style={{ backgroundColor: "#232659" }}>
      <div className="login-container py-5 h-100">
        <div className="login-card" style={{ borderRadius: "1rem" }}>
          <div className="card-stack">
            {paid ? (
              <div>
                <img src="/assets/images/payment-success.gif" />
              </div>
            ) : (
              <>
                <div className="card-item" style={{ paddingLeft: "20px" }}>
                  <Card
                    cvc={cvc}
                    expiry={expiry}
                    focused={focused}
                    name={name}
                    number={number}
                  />
                </div>
                <div className="card-item">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="heading">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Payment</span>
                      </div>

                      <h5
                        className="fw-normal"
                        style={{ letterSpacing: "1px" }}
                      >
                        Enter your Credit Card details
                      </h5>

                      <div className="form-control">
                        <input
                          value={name}
                          placeholder="Name on the card"
                          name="name"
                          onChange={(e) => setName(e.target.value)}
                          type="email"
                          id="form2Example17"
                          className=""
                          onFocus={handleInputFocus}
                        />
                      </div>

                      <div className="form-control">
                        <input
                          value={number}
                          onChange={(e) =>
                            setNumber(formatCreditCardNumber(e.target.value))
                          }
                          type="tel"
                          name="number"
                          placeholder="Card Number"
                          onFocus={handleInputFocus}
                        />
                      </div>
                      <div className="form-control  two-column">
                        <input
                          value={expiry}
                          placeholder="Expiry"
                          onChange={(e) =>
                            setExpiry(formatExpirationDate(e.target.value))
                          }
                          name="expiry"
                          type="text"
                          id="form2Example27"
                          className="w-35"
                          onFocus={handleInputFocus}
                        />
                        <input
                          value={cvc}
                          name="cvc"
                          placeholder="CVC"
                          onChange={(e) => setCvc(formatCVC(e.target.value))}
                          type="text"
                          id="form2Example27"
                          className="w-35"
                          onFocus={handleInputFocus}
                        />
                      </div>
                      <div style={{ marginBottom: "10px" }}>
                        <button
                          className="login-button"
                          type="button"
                          onClick={() => setPaid(true)}
                        >
                          Pay
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
