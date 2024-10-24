import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams, Link } from "react-router-dom";

import Loading from "../Pages/Loading";
import Sidebar from "../Project/Components/Sidebar";
import Header from "../Project/Components/Header";
import Main from "../Project/Pages/Main";
import Error from "../Pages/Error";
import { UserDocs } from "../../Context/UserDocsContext";
import { UserAuth } from "../../Context/AuthContext";

const Project = () => {
  const { id } = useParams(); // projectId z URL
  const { user } = UserAuth();
  const { projects, updateProjectId } = UserDocs();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Stan ładowania projektów

  // Funkcja wyszukiwania projektu
  const findProject = (projectId) => {
    const project = projects.find((project) => project.id === projectId);
    if (project) {
      updateProjectId(project.id); // Aktualizuj projectId w kontekście
      console.log("Znaleziony projekt:", project);
      return true; // Zwróć true, jeśli projekt został znaleziony
    } else {
      console.log("Nie znaleziono projektu o podanym ID:", projectId);
      return false; // Zwróć false, jeśli projekt nie został znaleziony
    }
  };

  useEffect(() => {
    console.log("ID: ", id, "Projects: ", projects);
    if (projects.length === 0 || !projects) {
      console.log("Projekty jeszcze nie załadowane, czekam...");
      return; // Czekamy, aż projekty się załadują
    }

    // Szukamy projektu po ID, gdy są już dostępne
    const found = findProject(id);

    if (found) {
      setLoading(false);
    }

    // Przekieruj, jeśli projekt nie został znaleziony
    else {
      navigate("/admin/projects");
    }
  }, [id, projects, navigate]); // Śledzimy zmiany w projectId oraz projekty

  // Pokazujemy ekran ładowania, jeśli dane jeszcze się nie załadowały
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app admin">
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
