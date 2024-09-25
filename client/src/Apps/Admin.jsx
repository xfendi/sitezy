import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { UserDocs } from "../Context/UserDocsContext";

import "../Styles/admin.css";

import Sidebar from "../Admin/Components/Sidebar";

import Main from "../Admin/Pages/Main";
import Error from "../Admin/Pages/Error";

const Admin = () => {
  const { profile, company, subscription } = UserDocs();

  const navigate = useNavigate()
  return (
    <div className={`admin app ${profile.theme === "light" ? "theme-light" : "theme-dark"}`}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Admin;
