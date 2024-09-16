import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Landing from "./Apps/Landing";
import Admin from "./Apps/Admin";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const subdomain = window.location.host.split(".")[0];
  if (subdomain === "admin") {
    return <Admin />;
  } else {
    return <Landing />;
  }
};

export default App;
