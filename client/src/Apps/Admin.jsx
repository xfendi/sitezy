import React from "react";
import { Route, Routes } from "react-router-dom";
import { UserDocs } from "../Context/UserDocsContext";

import "../Styles/admin.css";

import Error from "../Admin/Pages/Error";
import Project from "../Admin/Routes/Project";
import Setup from "../Admin/Routes/Setup";
import Index from "../Admin/Pages/Index";
import Projects from "../Admin/Pages/Projects";

const Admin = () => {
  const { profile } = UserDocs();
  return (
    <div
      className={`admin__app ${
        profile.theme === "light" ? "light" : "dark"
      } bg-neutral-100 dark:bg-neutral-800`}
    >
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/project/:id/*" element={<Project />} />
        <Route path="/setup/*" element={<Setup />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Admin;
