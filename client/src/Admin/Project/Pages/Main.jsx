import React from "react";
import { NavLink, useParams } from "react-router-dom";

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const Main = () => {
  const { id } = useParams();
  return (
    <section className="main-container">
      <div className="main-header flex justify-between">
        <div className="main-header_title text-2xl font-semibold">Overview</div>
        <div className="main-header_settings header__right-icons border-none p-0">
          <MoreVertRoundedIcon fontSize="small" />
        </div>
      </div>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink
              to={`/admin/project/${id}/accounts`}
              className="main-nav_link"
            >
              <p>Accounts</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/admin/project/${id}/accounts`}
              className="main-nav_link"
            >
              <p>Profile</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/admin/project/${id}/accounts`}
              className="main-nav_link"
            >
              <p>Accounts</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/admin/project/${id}/accounts`}
              className="main-nav_link"
            >
              <p>Accounts</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/admin/project/${id}/accounts`}
              className="main-nav_link"
            >
              <p>Accounts</p>
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className="main-section"></section>
    </section>
  );
};

export default Main;
