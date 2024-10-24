import React from 'react';
import { Routes, Route } from "react-router-dom";

import '../Styles/auth.css';

import LogIn from '../Auth/Pages/LogIn';
import SignUp from '../Auth/Pages/SignUp';
import EmailVerify from '../Auth/Pages/EmailVerify';

const Auth = () => {
  return (
    <div className="auth__app">
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/emailverify" element={<EmailVerify />} />
      </Routes>
    </div>
  )
}

export default Auth