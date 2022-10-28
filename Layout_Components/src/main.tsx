import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./providers/ThemeProvider";
import { GlobalStyle } from "./styles/Global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
