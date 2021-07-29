import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.ts";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import dark from "./styles/theme/dark";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
