import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Agent/navAgents.jsx";
import Sidebar from "./components/Agent/sidebar.jsx";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex gap-8 flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Page content goes here */}
        <main className="p-4 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
