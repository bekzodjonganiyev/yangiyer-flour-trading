import React from 'react'


import { Outlet } from "react-router-dom";
import { Navbar as Header, Footer } from "../../components";

export const Layout = () => {
  return (
    <>
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-auto bg-green-200">
       
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
};


// export const AdminLayout = () => {
//   return (
//     <div>AdminLayout</div>
//   )
// }
