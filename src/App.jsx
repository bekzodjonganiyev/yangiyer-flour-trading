import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";
import { Home } from "./pages/home/Home";
import { Photos } from "./pages/photos/Photos";

import { smallActions } from "./context";
import { News } from "./pages/news/News";

export const App = () => {
  return (
    <div
      className="w-screen h-screen overflow-x-hidden flex flex-col"
      onScroll={(e) => smallActions.handleScroll(e.currentTarget.scrollTop)}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="photos" element={<Photos />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
};
