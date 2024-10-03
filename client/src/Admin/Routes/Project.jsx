import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import Loading from "../Pages/Loading";

import Sidebar from "../Project/Components/Sidebar";
import Main from "../Project/Pages/Main";
import Error from "../Pages/Error";
import { UserDocs } from "../../Context/UserDocsContext";

const Project = () => {
  const { id } = useParams(); // projectId z URL
  const { projects, updateProjectId } = UserDocs();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Stan ładowania projektów

  // Funkcja wyszukiwania projektu
  const findProject = (projectId) => {
    try {
      const project = projects.find((project) => project.id === projectId);
      if (project) {
        updateProjectId(project.id); // Aktualizuj projectId w kontekście
        console.log("Znaleziony projekt:", project);
      } else {
        console.log("Nie znaleziono projektu o podanym ID:", id);
        navigate("/admin"); // Przekierowanie, jeśli projekt nie zostanie znaleziony
      }
    } catch (e) {
      console.error("Błąd podczas wyszukiwania projektu:", e.message);
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
      if (projects.length === 0) {
        console.log("Projekty jeszcze nie załadowane, czekam...");
        return; // Czekamy, aż projekty się załadują
      }
      findProject(id); // Szukamy projektu po ID, gdy są już dostępne
      setLoading(false); // Ustawiamy koniec ładowania
    };

    fetchProject();
  }, [id, projects]); // Śledzimy zmiany w projectId oraz projekty

  // Pokazujemy ekran ładowania, jeśli dane jeszcze się nie załadowały
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app admin">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default Project;
