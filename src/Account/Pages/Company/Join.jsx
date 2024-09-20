import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoPrimary from "../../../Assets/logo-primary.png";

const Join = () => {
  // const [code, setCode] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      navigate("/account/setup/finish");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <section className="form__section">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div
        className="form__box"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="100"
      >
        <div className="form__top">
          <div className="form__logo">
            <img src={LogoPrimary} alt="sitezy" width="55px" />
          </div>
          <div className="form__top-title">Join Existing Company</div>
          <div className="form__top-subtitle">
            Enter invite code to join existing company!
          </div>
        </div>

        <form onSubmit={HandleSubmit} className="form">
          <div className="form__input-box">
            <label htmlFor="code">Code</label>
            <input
              type="name"
              name="code"
              id="code"
              placeholder="code here..."
              onChange={(e) => {
                // setCode(e.target.value);
              }}
              required
            />
          </div>

          {error && <div className="form__error">{error}</div>}
          <button type="submit" className="btn-dark">
            Submit
          </button>

          <div className="form__footer">
            <div className="form__footer-text">
              Want to create new company?{" "}
              <a href="/account/setup/company/create">Create</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Join;
