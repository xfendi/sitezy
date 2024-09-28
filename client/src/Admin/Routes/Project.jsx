import React from "react";
import { Route, Routes } from "react-router-dom";

import Sidebar from "../Project/Components/Sidebar";
import Main from "../Project/Pages/Main";
import Error from "../Pages/Error";

const Project = () => {
  return (
    <div className="app admin">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Project;
