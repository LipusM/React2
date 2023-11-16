import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { GeistProvider, CssBaseline } from '@geist-ui/core'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline />
      <App />
    </GeistProvider>
  </React.StrictMode>
);
