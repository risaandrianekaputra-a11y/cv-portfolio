import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { PortfolioProvider } from "./context/PortfolioContext";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <HashRouter>
      <PortfolioProvider>
        <App />
        <Toaster position="top-right" />
      </PortfolioProvider>
    </HashRouter>
  </React.StrictMode>
);