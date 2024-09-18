import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { DOMAIN, useSubdomainRedirect } from "./Exports";

import Site from "./Apps/Site";
import Admin from "./Apps/Admin";
import Auth from "./Apps/Auth";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const subdomain = window.location.host.split(".")[0];

  if (subdomain === "admin") {
    return <Admin />;
  } else if (subdomain === "auth") {
    return <Auth />;
  } else {
    return <Site />;
  }
};

export default App;
