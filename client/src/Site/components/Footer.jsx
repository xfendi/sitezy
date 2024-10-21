import React from "react";

import { FaDiscord, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="footer"
      data-aos="fade-up"
      data-aos-easing="ease-out-back"
      data-aos-delay="100"
    >
      <div
        className="footer__top"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="200"
      >
        <div className="footer__top-logo">
            Contact Us
        </div>
        <div
          className="footer__top-socials"
          data-aos="fade-up"
          data-aos-easing="ease-out-back"
          data-aos-delay="300"
        >
          <a href="/" target="_blank" className="footer__top-socials-social">
            <FaDiscord />
          </a>
          <a href="/" target="_blank" className="footer__top-socials-social">
            <FaInstagram />
          </a>
          <a href="/" target="_blank" className="footer__top-socials-social">
            <FaFacebook />
          </a>
          <a href="/" target="_blank" className="footer__top-socials-social">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-rights">
          &copy; Sitezy 2024. All Rights Reserved.
        </div>
        <ul className="footer__bottom-links">
          <li>
            <a href="/privacy">Privacy</a>
          </li>
          <li>
            <a href="/terms">Terms</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
