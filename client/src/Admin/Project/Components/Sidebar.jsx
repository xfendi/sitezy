import React, { useEffect, useState } from "react";

// import { UserDocs } from "../../Context/UserDocsContext";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import AddchartRoundedIcon from "@mui/icons-material/AddchartRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";

import { UserAuth } from "../../../Context/AuthContext";
import { Link, NavLink, useParams } from "react-router-dom";
import { UserDocs } from "../../../Context/UserDocsContext";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [isProfile, setIsProfile] = useState(false);
  const [activeProjects, setActiveProjects] = useState([]);
  const [inactiveProjects, setInactiveProjects] = useState([]);

  const { user, logout } = UserAuth();
  const { selectedProject, projects } = UserDocs();
  const { id } = useParams();

  const HandleClick = (name) => {
    setActive(name);
  };

  const HandleLogout = () => {
    logout();
  };

  if (active !== "" && window.location.pathname === "/admin") {
    setActive("");
  }

  useEffect(() => {
    if (projects.length > 0) {
      setActiveProjects(projects.filter((project) => project.active === true));
      setInactiveProjects(
        projects.filter((project) => project.active === false)
      );
    } else {
      console.log("Brak projektów do filtrowania");
    }
  }, [projects]);

  return (
    <aside className="h-full">
      <nav className="sidebar h-full rounded-xl flex flex-col">
        <div
          className="sidebar__profile"
          onClick={() => setIsProfile(!isProfile)}
        >
          <img
            src={selectedProject.photoURL}
            alt="Profile Pic"
            style={{ borderRadius: "5px" }}
            className="w-9 h-9 rounded-md"
          />
          <div className="sidebar__profile__main flex justify-between items-center overflow-hidden transition-all w-full">
            <div className="sidebar__profile-text leading-4">
              <div className="sidebar__profile-text-name">
                {selectedProject.name}
              </div>
              <div className="sidebar__profile-text-email">
                {selectedProject.id}
              </div>
            </div>
            <div className="sidebar__profile-settings">
              {isProfile ? (
                <KeyboardArrowDownRoundedIcon fontSize="small" />
              ) : (
                <KeyboardArrowUpRoundedIcon fontSize="small" />
              )}
            </div>
          </div>
        </div>
        <div
          className="dropdown__menu"
          style={{ display: isProfile ? "block" : "none" }}
        >
          <ul>
            {activeProjects.map((project) => (
              <li key={project.id}>
                <a
                  href={`/admin/project/${project.id}`}
                  className="sidebar__nav-link"
                >
                  <img
                    src={project.photoURL}
                    alt=""
                    className="w-6 h-6 rounded-md"
                  />
                  <p style={{ fontWeight: 600 }}>{project.name}</p>
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/admin/projects"
                className="sidebar__nav-link"
                onClick={() => HandleClick("settings")}
              >
                <WindowRoundedIcon fontSize="small" /> <p>All Projects</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar__nav flex-1">
          <ul>
            <li className="sidebar__search">
              <SearchRoundedIcon fontSize="small" />
              <input type="text" id="search" placeholder="Search" />
            </li>
            <li>
              <Link
                to={`/admin/project/${id}`}
                className={
                  active === ""
                    ? "sidebar__nav-link active"
                    : "sidebar__nav-link"
                }
                onClick={() => HandleClick("")}
              >
                <HomeRoundedIcon fontSize="small" /> <p>Dashboard</p>
              </Link>
            </li>
            <li>
              <NavLink
                to={`/admin/project/${id}/accounts`}
                className="sidebar__nav-link"
                onClick={() => HandleClick("accounts")}
              >
                <SupervisorAccountRoundedIcon fontSize="small" />{" "}
                <p>Accounts</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/admin/project/${id}/analytics`}
                className="sidebar__nav-link"
                onClick={() => HandleClick("analytics")}
              >
                <AssessmentRoundedIcon fontSize="small" /> <p>Analytics</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/admin/project/${id}/templates`}
                className="sidebar__nav-link"
                onClick={() => HandleClick("templates")}
              >
                <AppRegistrationRoundedIcon fontSize="small" /> <p>Templates</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/admin/project/${id}/blog`}
                className="sidebar__nav-link"
                onClick={() => HandleClick("blog")}
              >
                <LibraryBooksRoundedIcon fontSize="small" /> <p>Blog</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/admin/project/${id}/integrations`}
                className="sidebar__nav-link"
                onClick={() => HandleClick("integrations")}
              >
                <AddchartRoundedIcon fontSize="small" /> <p>Integrations</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/admin/project/${id}/website`}
                className="sidebar__nav-link"
                onClick={() => HandleClick("website")}
              >
                <LanguageRoundedIcon fontSize="small" /> <p>Website</p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar__nav">
          <ul>
            <li>
              <NavLink
                to={`/admin/project/${id}/settings`}
                className="sidebar__nav-link"
                onClick={() => HandleClick("settings")}
              >
                <SettingsIcon fontSize="small" /> <p>Settings</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/help"
                className="sidebar__nav-link"
                onClick={() => HandleClick("help")}
              >
                <QuizRoundedIcon fontSize="small" /> <p>Help</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
