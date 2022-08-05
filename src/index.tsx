import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./global.styles";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
);
