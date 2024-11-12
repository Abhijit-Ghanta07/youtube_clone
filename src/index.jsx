import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./services/providers/ThemeProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// style
import "./sass/main.scss";
import "./index.scss";

// render dom
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </>
);
