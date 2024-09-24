import React from "react";
import { Route, Routes } from "react-router-dom";
import "../Styles/admin.css";
import Sidebar from "../Admin/Components/Sidebar";
import Main from "../Admin/Pages/Main";
import { UserDocs } from "../Context/UserDocsContext";

const Admin = () => {
  const { profile, company, subscription } = UserDocs();
  return (
    <div className="admin app">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default Admin;
