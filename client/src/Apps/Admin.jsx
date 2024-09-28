import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserDocs } from "../Context/UserDocsContext";

import "../Styles/admin.css";

import Error from "../Admin/Pages/Error";
import Company from "../Admin/Routes/Company";
import Project from "../Admin/Routes/Project";
import Setup from "../Admin/Routes/Setup";

const Admin = () => {
  const { profile } = UserDocs();
  return (
    <div className={`admin__app ${profile.theme === "light" ? "theme-light" : "theme-dark"}`}>
      <Routes>
        <Route path="/company/:id/*" element={<Company />} />
        <Route path="/project/:id/*" element={<Project />} />
        <Route path="/setup/*" element={<Setup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Admin;
