import React from "react";
import ReactDOM from "react-dom/client";
import { WrappedApp } from "./components/App/App";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
