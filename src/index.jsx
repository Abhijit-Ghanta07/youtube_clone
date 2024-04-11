import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./services/providers/ThemeProvider";
// style
import "./sass/main.scss";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>
);
