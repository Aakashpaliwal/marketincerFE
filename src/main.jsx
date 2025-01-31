import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { MaterialUIControllerProvider } from "./context/index.js";
import { MaterialUIControllerProvider } from "@/context";

// Material Dashboard 2 React Context Provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </BrowserRouter>
  </StrictMode>
);
