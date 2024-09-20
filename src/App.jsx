import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { AuthContextProvider } from "./Context/AuthContext";
import { Route, Routes } from "react-router-dom";

import Site from "./Apps/Site";
import Admin from "./Apps/Admin";
import Auth from "./Apps/Auth";
import Account from "./Apps/Account";
import Error from "./Error/Error";

import ProtectedRoute from './Components/ProtectedRoute'

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/*" element={<Site />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/account/*" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        <Route path="/admin/*" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default App;
