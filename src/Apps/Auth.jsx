import React from 'react';
import { Routes, Route } from "react-router-dom";

import '../Styles/auth.css';

import Index from '../Auth/Pages/Index';
import LogIn from '../Auth/Pages/LogIn';
import SignUp from '../Auth/Pages/SignUp';

const Auth = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default Auth