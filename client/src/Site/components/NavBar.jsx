import React, { useState } from "react";

import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

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
          <Link to="/" className="navbar__logo-text">
            Sitezy
          </Link>
          <div className="navbar__menu" onClick={() => setIsOpen(!isOpen)}>
            <LuMenu size={33} />
          </div>
        </div>
      </div>
      <div className="navbar__middle">
        <ul className={isOpen ? "navbar__links navbar-open" : "navbar__links"}>
          <li>
            <Link to="/#features" className="navbar__links-link">
              Features
            </Link>
          </li>
          <li>
            <Link to="/#pricing" className="navbar__links-link">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/#customers" className="navbar__links-link">
              Customers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar__links-link">
              Contact
            </Link>
          </li>
          <div
            className={
              isOpen
                ? "navbar__links-buttons navbar-open"
                : "navbar__links-buttons"
            }
          >
            <Link to="/auth/login" className="navbar__buttons-button btn-clear">
              Login
            </Link>
            <Link to="/auth/signup" className="navbar__buttons-button btn-dark">
              Get Started
            </Link>
          </div>
        </ul>
      </div>
      <div className={isOpen ? "navbar__right navbar-open" : "navbar__right"}>
        <div className="navbar__buttons">
          <Link to="/auth/login" className="navbar__buttons-button btn-clear">
            Login
          </Link>
          <Link to="/auth/signup" className="navbar__buttons-button btn-dark">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
