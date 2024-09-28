import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../Company/Pages/Main";
import Error from "../Pages/Error";

const Company = () => {
  return (
    <div className="app admin">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Company;
