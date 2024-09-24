import React from "react";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import { UserAuth } from "../../Context/AuthContext";

const Sidebar = () => {
  const { user } = UserAuth();
  return (
    <aside className="h-full">
      <nav className="sidebar h-full rounded-xl flex flex-col p-3">
        <div className="sidebar__profile">
          <img
            src={user.photoURL}
            alt="Profile Pic"
            style={{ borderRadius: "5px" }}
            className="w-10 h-10 rounded-md"
          />
          <div className="sidebar__profile__main flex justify-between items-center overflow-hidden transition-all w-full">
            <div className="sidebar__profile-text leading-4">
              <div className="sidebar__profile-text-name font-semibold">
                {user.displayName}
              </div>
              <div className="sidebar__profile-text-email text-xs text-gray-600">
              {user.email}
              </div>
            </div>
            <div className="sidebar__profile-settings"><MoreVertRoundedIcon fontSize="small" /></div>
          </div>
        </div>
        <div className="sidebar__nav flex-1">
          <ul>
            <li className="sidebar__search">
              <SearchRoundedIcon fontSize="small" />
              <input type="text" id="search" placeholder="Search" />
            </li>
            <li>
              <a href="/admin" className="sidebar__nav-link focus">
                <HomeRoundedIcon fontSize="small" /> <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="/admin/accounts" className="sidebar__nav-link">
                <SupervisorAccountRoundedIcon fontSize="small" /> <p>Accounts</p>
              </a>
            </li>
            <li>
              <a href="/admin/analytics" className="sidebar__nav-link">
                <AssessmentRoundedIcon fontSize="small" /> <p>Analytics</p>
              </a>
            </li>
            <li>
              <a href="/admin/templates" className="sidebar__nav-link">
                <AppRegistrationRoundedIcon fontSize="small" /> <p>Templates</p>
              </a>
            </li>
            <li>
              <a href="/admin/blog" className="sidebar__nav-link">
                <LibraryBooksRoundedIcon fontSize="small" /> <p>Blog</p>
              </a>
            </li>
            <li>
              <a href="/admin/integrations" className="sidebar__nav-link">
                <AddchartRoundedIcon fontSize="small" /> <p>Integrations</p>
              </a>
            </li>
            <li>
              <a href="/admin/website" className="sidebar__nav-link">
                <LanguageRoundedIcon fontSize="small" /> <p>Website</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__nav">
          <ul>
            <li>
              <a href="/admin/settings" className="sidebar__nav-link">
                <TuneRoundedIcon fontSize="small" /> <p>Settings</p>
              </a>
            </li>
            <li>
              <a href="/admin/help" className="sidebar__nav-link">
                <QuizRoundedIcon fontSize="small" /> <p>Help</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
