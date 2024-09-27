import React from "react";
import { Route, Routes } from "react-router-dom";

import Profile from "../Pages/Profile";

import Finish from "../Pages/Finish";

const Setup = () => {
  return (
    <div className="auth__app auth__setup">
      <Routes>
        <Route path="/profile" element={<Profile />} />
        
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
  );
};

export default Setup;
