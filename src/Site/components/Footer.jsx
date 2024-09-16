import React from "react";

import { FaDiscord, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="100" >
      <div className="footer__top" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="200" >
        <div className="footer__top-logo">
          <a href="/" className="footer__top-logo-text">
            Sitezy
          </a>
        </div>
        <div className="footer__top-socials" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="300">
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
      <div className="footer__container">
        <div className="footer__links" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="400">
          <div className="footer__links-title">Sitezy</div>
          <ul className="footer__links-list">
            <li>
              <a href="#features" className="footer__links-link">
                Features
              </a>
            </li>
            <li>
              <a href="#templates" className="footer__links-link">
                Templates
              </a>
            </li>
            <li>
              <a href="#pricing" className="footer__links-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#customers" className="footer__links-link">
                Customers
              </a>
            </li>
            <li>
              <a href="/contact" className="footer__links-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__links" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-delay="500">
          <div className="footer__links-title">Helpful Links</div>
          <ul className="footer__links-list">
            <li>
              <a href="/legal" className="footer__links-link">
                Legal center
              </a>
            </li>
            <li>
              <a href="/privacy" className="footer__links-link">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="/partnership" className="footer__links-link">
                Partnerships
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-lang">
            LANG
        </div>
        <div className="footer__bottom-rights">
            &copy; Sitezy 2024. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
