import React, { useEffect, useState } from "react";
import { UserDocs } from "../../Context/UserDocsContext";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const { profile, projects, subscription, projectId } = UserDocs();

  useEffect(() => {
    if (profile.color && projects && subscription.planName && projectId) {
      setLoading(false);
    }
  }, [profile, projects, subscription, projectId]);

  if (loading) {
    return <Loading />;
  }

  if (!profile.color) {
    return <Navigate to="/account/setup/profile" />;
  } else if (projects.length === 0) {
    return <Navigate to="/admin/setup/project" />;
  } else if (!subscription.planName) {
    return <Navigate to="/admin/setup/project/plan" />;
  } else if (projectId) {
    return <Navigate to={`/admin/project/${projectId}`} />;
  } else {
    return <Navigate to="/admin/projects" />;
  }
};

export default Index;
