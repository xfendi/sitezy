import React from "react";
import { Route, Routes } from "react-router-dom";

import Plan from "../Pages/Plan";
import Cancel from "../Pages/Plan/Cance";
import Success from "../Pages/Plan/Success";

import Index from "../Pages/Setup/Index";
import Create from "../Pages/Setup/Create";
import Join from "../Pages/Setup/Join";

const Setup = () => {
  return (
    <div className="auth__app auth__setup">
      <Routes>
        <Route path="/plan" element={<Plan />} />
        <Route path="/plan/success" element={<Success />} />
        <Route path="/plan/cancel" element={<Cancel />} />

        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
};

export default Setup;
