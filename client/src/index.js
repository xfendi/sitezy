import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";
import "./Styles/form.css";
import { AuthContextProvider } from "./Context/AuthContext";
import { UserDocsContextProvider } from "./Context/UserDocsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UserDocsContextProvider>
          <App />
        </UserDocsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
