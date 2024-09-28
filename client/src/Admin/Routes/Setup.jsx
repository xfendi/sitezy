import React from "react";
import { Route, Routes } from "react-router-dom";

import Plan from "../Setup/Company/Plan.jsx";
import Cancel from "../Setup/Company/Plan/Cancel";
import Success from "../Setup/Company/Plan/Success";

import Index from "../Setup/Company/Index";
import Create from "../Setup/Company/Create";
import Join from "../Setup/Company/Join";

const Setup = () => {
  return (
    <div className="auth__app auth__setup">
      <Routes>
        <Route path="/company/plan" element={<Plan />} />
        <Route path="/company/plan/success" element={<Success />} />
        <Route path="/company/plan/cancel" element={<Cancel />} />

        <Route path="/company" element={<Index />} />
        <Route path="/company/create" element={<Create />} />
        <Route path="/company/join" element={<Join />} />
      </Routes>
    </div>
  );
};

export default Setup;
