import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import { UserDocs } from "../../Context/UserDocsContext";
import { useSidebar } from "../../Context/SidebarContext";

import Loading from "../Pages/Loading";
import Sidebar from "../Project/Components/Sidebar";
import Header from "../Project/Components/Header";
import Main from "../Project/Pages/Main";
import Error from "../Pages/Error";

const Project = () => {
  const [loading, setLoading] = useState(true);

  const { isSidebarOpen } = useSidebar();
  console.log("Sidebar Small:", isSidebarOpen);
  const navigate = useNavigate();
  const { id } = useParams();
  const { projects, updateProjectId } = UserDocs();

  useEffect(() => {
    const findProject = (projectId) => {
      const project = projects.find((project) => project.id === projectId);
      if (project) {
        updateProjectId(project.id);
        console.log("Znaleziony projekt:", project);
        return true;
      } else {
        console.log("Nie znaleziono projektu o podanym ID:", projectId);
        return false;
      }
    };

    console.log("ID: ", id, "Projects: ", projects);
    if (projects.length === 0 || !projects) {
      console.log("Projekty jeszcze nie załadowane, czekam...");
      return;
    }

    const found = findProject(id);

    if (found) {
      setLoading(false);
    } else {
      navigate("/admin/projects");
    }
  }, [id, projects, navigate, updateProjectId]);

  if (loading) {
    return <Loading />;
  }

  return (
      <div className={`app admin ${isSidebarOpen ? "sidebar-small" : ""}`}>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
  );
};

export default Project;
