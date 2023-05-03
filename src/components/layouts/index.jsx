import React from "react";
import { MainHeader } from "../main_header";
import { Footer } from "../footer";
import { Outlet } from "react-router-dom";
import { TopHeader } from "../top_header";
import Sidebar from "../admin/sidebar/Sidebar";

export const UserLayout = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <main className="flex-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export const AdminLayout = () => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className=" w-full px-20 py-10 overflow-x-hidden overflow-y-scroll border border-red-500">
        <Outlet />
      </div>
    </div>
  );
};
