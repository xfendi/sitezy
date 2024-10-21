import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../Pages/Settings/Index";

import { NavLink } from "react-router-dom";

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const Header = () => {
  return (
    <div className="main-header flex justify-between">
      <div className="main-header_title text-2xl font-semibold">Overview</div>
      <div className="main-header_settings header__right-icons border-none p-0">
        <MoreVertRoundedIcon fontSize="small" />
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to={`/account/settings`} className="main-nav_link">
            <p>Account</p>
          </NavLink>
        </li>
        <li>
          <NavLink to={`/account/settings/profile`} className="main-nav_link">
            <p>Profile</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Settings = () => {
  return (
    <div className="account__app h-full">
      <div className="main-container h-full">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </div>
  );
};

export default Settings;
