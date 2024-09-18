import { Routes, Route } from "react-router-dom";

import "../Styles/site.css";

import NavBar from "../Site/components/NavBar";
import Footer from "../Site/components/Footer";

import Contact from "../Site/Pages/Contact";
import Home from "../Site/Pages/Home";
import Templates from "../Site/Pages/Templates";

const Site = () => {
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

export default Site;