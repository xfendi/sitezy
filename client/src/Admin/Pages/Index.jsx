import React, { useEffect, useState } from "react";
import { UserDocs } from "../../Context/UserDocsContext";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState(null);
  const { profile, projects, projectId } = UserDocs();

  useEffect(() => {
    if (projects) {
      if (profile.color) {
        setLoading(false);
      } else {
        setRedirectPath("/account/setup/profile");
      }
    }
  }, [profile, projects]);

  if (redirectPath) {
    console.log("redirect");
    return <Navigate to={redirectPath} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (projects.length === 0) {
    return <Navigate to="/admin/setup/project" />;
  } else if (projectId) {
    return <Navigate to={`/admin/project/${projectId}`} />;
  } else {
    return <Navigate to="/admin/projects" />;
  }
};

export default Index;
