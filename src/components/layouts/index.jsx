import React from 'react'
import { MainHeader } from "../main_header";
import { Footer } from "../footer";
import { Outlet } from "react-router-dom";
import { TopHeader } from '../top_header';

export const UserLayout = () => {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <main className="container mx-auto flex-auto">
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
