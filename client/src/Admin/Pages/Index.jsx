import React from "react";
import { UserDocs } from "../../Context/UserDocsContext";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { profile, projects, subscription } = UserDocs();

  if (!profile.color) {
    return <Navigate to="/account/setup/profile" />;
  } else if (projects.length === 0) {
    return <Navigate to="/admin/setup/project" />;
  } else if (!subscription.planName) {
    return <Navigate to="/admin/setup/project/plan" />;
  } else {
    return <Navigate to="/admin/projects" />;
  }
};

export default Index;
