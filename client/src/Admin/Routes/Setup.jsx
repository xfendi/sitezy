import React from "react";
import { Route, Routes } from "react-router-dom";

import Plan from "../Setup/Project/Plan.jsx";
import Cancel from "../Setup/Project/Plan/Cancel.jsx";
import Success from "../Setup/Project/Plan/Success.jsx";

import ProjectCreate from "../Setup/Project/ProjectCreate.jsx";
import ProjectJoin from "../Setup/Project/ProjectJoin.jsx";
import ProjectIndex from "../Setup/Project/ProjectIndex.jsx";

const Setup = () => {
  return (
    <div className="auth__app auth__setup">
      <Routes>
        <Route path="/project/plan" element={<Plan />} />
        <Route path="/project/plan/success" element={<Success />} />
        <Route path="/project/plan/cancel" element={<Cancel />} />

        <Route path="/project" element={<ProjectIndex />} />
        <Route path="/project/create" element={<ProjectCreate />} />
        <Route path="/project/join" element={<ProjectJoin />} />
      </Routes>
    </div>
  );
};

export default Setup;
