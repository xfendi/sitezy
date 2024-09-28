import React from "react";

import LogoPrimary from "../../../Assets/logo-primary.png";

const Cancel = () => {
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
            <div className="form__top-title" style={{ color: 'red' }} >Payment Failed</div>
            <div className="form__top-subtitle">
              Oops! Something went wrong. <br />
              Please try again or contact support for assistance.
            </div>
          </div>
        </div>

        <form className="form">
          <a href="/company/setup/plan" className="btn-dark">
            Try Again
          </a>

          <div className="form__footer">
            <div className="form__footer-text">
              Contact support for assistance! <a href="/contact">Support</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cancel;
