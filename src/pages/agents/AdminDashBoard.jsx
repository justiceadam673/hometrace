import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/Agent/sidebar.jsx";
import ChartAreaDefault from "../../pages/agents/AdminChart.jsx";
import HeroDashboard from "../../pages/agents/heroDashboard.jsx";
import HeroRecent from "../../pages/agents/heroRecent.jsx";
import NavAgent from "../../components/Agent/navAgents.jsx";

const AdminDashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <section className="h-auto bg-[#FAFAFA]">
      <NavAgent setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex gap-10">
        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={`
            fixed top-0 left-0 h-auto bg-[#FAFAFA] z-50
            transform transition-transform duration-300 ease-in-out
            w-[75%] md:w-[300px] lg:w-[300px]
            md:relative md:transform-none md:block
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
          `}
        >
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>
        <div className="w-full">
          <HeroDashboard />
          <div className="px-6 py-4">
            <ChartAreaDefault />
          </div>
          <HeroRecent />
        </div>
      </div>
    </section>
  );
};

export default AdminDashBoard;
