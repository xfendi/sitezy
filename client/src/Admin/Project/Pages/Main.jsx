import React from "react";
import { useParams } from "react-router-dom";

const Main = () => {
  const { id } = useParams();
  return <section className="main-section">{id}</section>;
};

export default Main;
