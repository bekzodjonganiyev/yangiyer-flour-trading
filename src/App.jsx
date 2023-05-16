import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";
import { MoreDetails } from "./components/details/Details";
import { Home } from "./pages/home/Home";
import { News } from "./pages/news/News";
import { Vacancies } from "./pages/vacancies/Vacancies";

import { smallActions } from "./context";

export const App = () => {
  return (
    <div
      className="w-screen h-screen overflow-x-hidden flex flex-col"
      onScroll={(e) => smallActions.handleScroll(e.currentTarget.scrollTop)}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photos" element={<Vacancies />} />
          <Route path="news" element={<News />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="details/:key/:id" element={<MoreDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
