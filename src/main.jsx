import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";

import { App } from "./App";
import AppContextProvider from "./context/app.contex";
import { Loader } from "./components/loader/Loader";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <AppContextProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </AppContextProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
