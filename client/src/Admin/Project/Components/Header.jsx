import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { UserAuth } from "../../../Context/AuthContext";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const Header = () => {
  const [search, setSearch] = useState("");
  const [isProfile, setIsProfile] = useState(false);

  const { user, logout } = UserAuth();

  const profileMenuRef = useRef();

  const HandleLogout = () => {
    logout(user);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!profileMenuRef?.current.contains(e.target)) {
        setIsProfile(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <header className="header bg-neutral-50 dark:bg-neutral-900">
      <div className="header__left">
        <div className="header__left-search m-0 relative">
          <SearchRoundedIcon fontSize="small" />
          <input
            type="text"
            id="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            className="dropdown__menu search gap-0 text-start"
            style={{ scale: search ? "1" : "0" }}
          >
            <div className="sidebar__profile-text leading-4">
              <div className="sidebar__profile-text-name">Search Results</div>
            </div>
            <div className="menu__divider"></div>
            {search}
          </div>
        </div>
      </div>
      <div className="header__right">
        <div className="header__right-icons">
          <NotificationsNoneRoundedIcon fontSize="small" />
          <AddCircleOutlineRoundedIcon fontSize="small" />
        </div>
        <div className="header__right-profile">
          <div
            className="sidebar__profile-container relative"
            ref={profileMenuRef}
          >
            <div
              className="dropdown__menu profile gap-0"
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
            <div
              className="header__profile"
              onClick={() => setIsProfile(!isProfile)}
            >
              <img
                src={user.photoURL}
                alt="profile"
                style={{ borderRadius: "10px" }}
                className="w-8 h-8"
              />
              <div className="sidebar__profile__main flex justify-between items-center overflow-hidden transition-all">
                <div className="sidebar__profile-text leading-4">
                  <div className="sidebar__profile-text-name">
                    {user.displayName}
                  </div>
                  <div className="sidebar__profile-text-email type">
                    {user.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
