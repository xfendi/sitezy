import React from "react";
import { UserDocs } from "../../Context/UserDocsContext";
import { Navigate } from "react-router-dom";

const Index = () => {
  const { profile, companyId, subscription } = UserDocs();

  if (profile.type === "work" && !companyId) {
    return <Navigate to="/admin/setup/company" />;
  } else if (profile.type === "work" && !subscription.planName) {
    return <Navigate to="/admin/setup/company/plan" />;
  } else if (!profile.color) {
    return <Navigate to="/account/setup/profile" />;
  }
  return <div>Admin Index</div>;
};

export default Index;
