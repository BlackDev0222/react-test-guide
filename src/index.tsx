// node_modules
import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";

// utils
import reportWebVitals from "./reportWebVitals";

// create react node
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// render react components
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// report web vitals
reportWebVitals();
