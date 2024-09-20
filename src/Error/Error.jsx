import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  if (!window.location.pathname === "/404") {
    navigate("/404");
    return
  }
  return <div>404</div>;
};

export default Error;
