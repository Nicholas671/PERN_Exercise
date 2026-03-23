// main.jsx
// Entry point for the React app.
// Mounts <App /> into the #root div in index.html.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
