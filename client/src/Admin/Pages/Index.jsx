import React, { useEffect, useState } from "react";
import { UserDocs } from "../../Context/UserDocsContext";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const { profile, projects, projectId } = UserDocs();

  useEffect(() => {
    console.log(profile.color, projects);
    if (profile.color && projects.length > 0) {
      setLoading(false);
    }
  }, [profile, projects]);

  if (!profile.color) {
    return <Navigate to="/account/setup/profile" />;
  } else if (projects.length === 0) {
    return <Navigate to="/admin/setup/project" />;
  }

  if (loading) {
    return <Loading />;
  } else if (projectId) {
    return <Navigate to={`/admin/project/${projectId}`} />;
  } else {
    return <Navigate to="/admin/projects" />;
  }
};

export default Index;
