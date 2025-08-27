import React from "react";
import { Link } from "react-router-dom";
import NavAgent from "../../components/Agent/navAgents.jsx";
import { useState } from "react";
import Sidebar from "../../components/Agent/sidebar.jsx";
import { UserRoundPlusIcon, HousePlusIcon } from "lucide-react";
import recentIcon from "../../assets/agent/iconsax-profile-add.png";

const RecentAgent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activities = [
    {
      message: "John Okoro viewed your listing in Lekki Phase 1",
      time: "2hrs ago",
      status: "viewed",
    },
    {
      message: "Richard Ade has confirmed the handing over",
      time: "2hrs ago",
      status: "confirmed",
    },
    {
      message: "James Smith requested a viewing appointment",
      time: "18mins ago",
      status: "pending",
    },
    {
      message: "Sarah Johnson made an inquiry about your property",
      time: "1 day ago",
      status: "inquiry",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "viewed":
        return (
          <img src={recentIcon} alt="" className="w-6 h-6 text-[#2C1669]" />
        );
      case "confirmed":
        return <HousePlusIcon className="w-6 h-6 text-[#2C1669]" />;
      case "pending":
      case "inquiry":
      default:
        return <UserRoundPlusIcon className="w-6 h-6 text-[#2C1669]" />;
    }
  };

  return (
    <section className="h-auto bg-[#FAFAFA]">
      <NavAgent setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex gap-8">
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
        <div className="w-full px-6 py-8 h-screen">
          <div className="border border-gray-200 rounded-[10px] p-6 w-full bg-white shadow-sm min-h-[75%]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent activity
              </h2>
            </div>

            <ul className="space-y-4 w-full">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-start justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className="flex items-start gap-3 w-full">
                    {getStatusIcon(activity.status)}
                    <div className="flex justify-between w-full">
                      <span className="text-sm text-gray-700">
                        {activity.message}
                      </span>
                      <span className="text-xs text-gray-400">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentAgent;
