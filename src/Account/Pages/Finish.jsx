import React from "react";
import ConfettiExplosion from "react-confetti-explosion";

import LogoPrimary from '../../Assets/logo-primary.png';
import useWindowSize from "react-use/lib/useWindowSize";

const Finish = () => {
  const { width, height } = useWindowSize();
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
          <ConfettiExplosion height={height} width={width} zIndex={1} duration={2500} />
          <div className="form__logo">
            <img src={LogoPrimary} alt="sitezy" width="55px" />
          </div>
          <div className="form__top-title">Your Sitezy Account is Ready!</div>
          <div className="form__top-subtitle">
            Congratulations! You've successfully created your Sitezy account. Now, let's start building your website or store
          </div>
        </div>

        <form className="form">
          <a href="/admin" className="btn-dark">
            Continue
          </a>

          <div className="form__footer">
            <div className="form__footer-text">
              Learn More About Creating Your First Project!{" "}
              <a href="/admin/help">Help</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Finish;