import React, { useEffect, useState } from "react";
import { UserDocs } from "../../Context/UserDocsContext";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState(null);
  const { profile, projects, projectId } = UserDocs();

  useEffect(() => {
    // Sprawdzamy, czy profile i projects są dostępne
    if (projects) {
      // Ustawiamy loading na false, gdy profile.color i projects są dostępne
      if (profile.color) {
        setLoading(false);
      } else {
        // Ustawiamy ścieżkę do przekierowania, jeśli color nie jest ustawiony
        setRedirectPath("/account/setup/profile");
        console.log(redirectPath);
      }
    }
  }, [profile, projects]);

  // Sprawdzamy, czy mamy ścieżkę do przekierowania
  if (redirectPath) {
    console.log("redirect");
    return <Navigate to={redirectPath} />;
  }

  // Jeśli dane są jeszcze ładowane, wyświetl Loading
  if (loading) {
    return <Loading />;
  }

  // Po zakończeniu ładowania, sprawdzamy warunki nawigacji
  if (projects.length === 0) {
    return <Navigate to="/admin/setup/project" />;
  } else if (projectId) {
    return <Navigate to={`/admin/project/${projectId}`} />;
  } else {
    return <Navigate to="/admin/projects" />;
  }
};

export default Index;
