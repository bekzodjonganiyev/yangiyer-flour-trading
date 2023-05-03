import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import { App } from "./App";
import AppContextProvider from "./context/app.contex";

import "./i18next";
import { UsersProvider } from "./context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </UsersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
