import React from 'react'
import { MainHeader } from "../main_header";
import { Footer } from "../footer";
import { Outlet } from "react-router-dom";


export const UserLayout = () => {
  return (
    <>
 
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
    <div>AdminLayout</div>
  )
}
