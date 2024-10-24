import React from 'react';
import { Routes, Route } from "react-router-dom";

import '../Styles/auth.css';
import '../Styles/admin.css';

import Setup from '../Account/routes/Setup';
import Settings from '../Account/routes/Settings';

const Account = () => {
  return (
    <div className="account__app">
      <Routes>
        <Route path="/setup/*" element={<Setup />} />
        <Route path="/settings/*" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default Account