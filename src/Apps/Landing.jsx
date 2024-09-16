import { Routes, Route } from "react-router-dom";

import "../Styles/landing.css";

import NavBar from "../Site/components/NavBar";
import Footer from "../Site/components/Footer";

import Contact from "../Site/pages/Contact";
import Home from "../Site/pages/Home";
import Templates from "../Site/pages/Templates";

const Landing = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Landing;