import React from "react";
import { Link, Route, Routes, NavLink } from "react-router-dom";

import Index from "../Pages/Settings/Index";
import Profile from "../Pages/Settings/Profile";

import { UserDocs } from "../../Context/UserDocsContext";
import { UserAuth } from "../../Context/AuthContext";

const Settings = () => {
  const { user } = UserAuth();
  const { profile } = UserDocs();
  return (
    <div
      className={
        `app account ${profile.theme === "light" ? "light" : "dark"} ` +
        "bg-neutral-100 dark:bg-neutral-800"
      }
    >
      {!user.emailVerified && (
        <div className="banner">
          click{" "}
          <Link className="banner-link" to="/auth/emailverify">
            Here
          </Link>{" "}
          to verify your email address and get full account access.
        </div>
      )}
      <div className="main-container h-full">
        <div className="main-header flex justify-between">
          <div className="main-header_title text-2xl font-semibold">
            Account Settings
          </div>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to={`/account/settings`} className="main-nav_link">
                <p>Account</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/account/settings/profile`}
                className="main-nav_link"
              >
                <p>Profile</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <section className="main-section settings">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Settings;
