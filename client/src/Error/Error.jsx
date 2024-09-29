import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <div className="error-title">404</div>
      <div className="error-description">Page not found</div>
      <div className="error-link">
        Go back? <Link to="/admin">Landing Page</Link>
      </div>
    </div>
  );
};

export default Error;
