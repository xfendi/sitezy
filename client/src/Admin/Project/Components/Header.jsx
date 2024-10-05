import React, { useState } from "react";

import { UserAuth } from "../../../Context/AuthContext";
import { Link } from "react-router-dom";

import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const [isProfile, setIsProfile] = useState(false);
  const { user, logout } = UserAuth();
  const HandleLogout = () => {
    logout(user);
  };
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left-title">Header</div>
      </div>
      <div className="header__right">
        <div className="header__right-buttons"></div>
        <div className="header__right-profile relative">
          <div className="header__right-prifile__img">
            <img
              src={user.photoURL}
              style={{ borderRadius: "5px" }}
              className="w-9 h-9 rounded-md cursor-pointer"
              alt="profile"
              onClick={() => setIsProfile(!isProfile)}
            />
          </div>
          <div
            className="header__right-profile__dropdown"
            style={{ scale: isProfile ? "1" : "0" }}
          >
            <div className="profile__dropdown">
              <img
                src={user.photoURL}
                alt="Profile Pic"
                style={{ borderRadius: "5px" }}
                className="w-9 h-9 rounded-md"
              />
              <div className="sidebar__profile__main flex justify-between items-center overflow-hidden transition-all w-full">
                <div className="sidebar__profile-text leading-4">
                  <div className="sidebar__profile-text-name">
                    {user.displayName}
                  </div>
                  <div className="sidebar__profile-text-email">
                    {user.email}
                  </div>
                </div>
              </div>
            </div>
            <div className="menu__divider"></div>
            <ul>
              <li>
                <Link to="/account/settings" className="sidebar__nav-link">
                  <SettingsIcon fontSize="small" />
                  <p>Settings</p>
                </Link>
              </li>
            </ul>
            <div className="menu__divider"></div>
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={() => HandleLogout()}
                  className="sidebar__nav-link"
                >
                  <LogoutIcon fontSize="small" />
                  <p>Log Out</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
