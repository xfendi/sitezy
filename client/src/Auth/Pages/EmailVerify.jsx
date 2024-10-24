import React, { useState } from "react";
import { sendEmailVerification } from "firebase/auth";

import LogoPrimary from "../../Assets/logo-primary.png";

import { UserAuth } from "../../Context/AuthContext";

const EmailVerify = () => {
  const [error, setError] = useState();
  const { user } = UserAuth();

  const HandleVerify = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await sendEmailVerification(user).then(() => {
        window.location.href = "/admin";
      });
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
          <div className="form__top-text">
            <div className="form__top-title">Email Verify</div>
            <div className="form__top-subtitle">
              verify your email address and get full account access
            </div>
          </div>
        </div>

        <form onSubmit={HandleVerify} className="form">
          {error && <div className="form__error">{error}</div>}
          <button type="submit" className="btn-dark">
            Verify
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailVerify;
