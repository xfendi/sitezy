import React, { useState } from "react";

import { LuMenu } from "react-icons/lu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState();
  return (
    <nav
      className="navbar"
      data-aos="fade-up"
      data-aos-easing="ease-out-back"
      data-aos-delay="100"
    >
      <div className="navbar__left">
        <div className="navbar__logo">
          <a href="/" className="navbar__logo-text">
            Sitezy
          </a>
          <div className="navbar__menu" onClick={() => setIsOpen(!isOpen)}>
            <LuMenu size={33} />
          </div>
        </div>
      </div>
      <div className="navbar__middle">
        <ul className={isOpen ? "navbar__links navbar-open" : "navbar__links"}>
          <li>
            <a href="/#features" className="navbar__links-link">
              Features
            </a>
          </li>
          <li>
            <a href="/#templates" className="navbar__links-link">
              Templates
            </a>
          </li>
          <li>
            <a href="/#pricing" className="navbar__links-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="/#customers" className="navbar__links-link">
              Customers
            </a>
          </li>
          <li>
            <a href="/contact" className="navbar__links-link">
              Contact
            </a>
          </li>
          <div
            className={
              isOpen
                ? "navbar__links-buttons navbar-open"
                : "navbar__links-buttons"
            }
          >
            <a href="/auth/login" className="navbar__buttons-button btn-clear">
              Login
            </a>
            <a href="/auth/signup" className="navbar__buttons-button btn-dark">
              Get Started
            </a>
          </div>
        </ul>
      </div>
      <div className={isOpen ? "navbar__right navbar-open" : "navbar__right"}>
        <div className="navbar__buttons">
          <a href="/auth/login" className="navbar__buttons-button btn-clear">
            Login
          </a>
          <a href="/auth/signup" className="navbar__buttons-button btn-dark">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
