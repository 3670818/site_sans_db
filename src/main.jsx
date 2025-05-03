import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import './index.css'; // Assurez-vous d'importer votre fichier CSS si nécessaire

const container = document.getElementById("root");
const root = createRoot(container);
import { HashRouter } from "react-router-dom"; // Remplace BrowserRouter par HashRouter

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

