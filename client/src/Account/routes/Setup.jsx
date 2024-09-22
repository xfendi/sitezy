import React from "react";
import { Route, Routes } from "react-router-dom";

import Profile from "../Pages/Profile";

import Index from "../Pages/Company/Index";
import Create from "../Pages/Company/Create";
import Join from "../Pages/Company/Join";
import Finish from "../Pages/Finish";
import Plan from "../Pages/Plan";
import Cancel from "../Pages/Plan/Cance";
import Success from "../Pages/Plan/Success";

const Setup = () => {
  return (
    <div className="auth__app auth__setup">
      <Routes>
        <Route path="/plan" element={<Plan />} />
        <Route path="/plan/success" element={<Success />} />
        <Route path="/plan/cancel" element={<Cancel />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/finish" element={<Finish />} />

        <Route path="/company" element={<Index />} />
        <Route path="/company/create" element={<Create />} />
        <Route path="/company/join" element={<Join />} />
      </Routes>
    </div>
  );
};

export default Setup;
