import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n.js";
import App from "./App";
import { Suspense } from "preact/compat";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>
);
