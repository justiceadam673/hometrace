import React from "react";
import { Link, useLocation } from "react-router-dom";
import houseIcon from "../../assets/agent/Component 10/iconamoon_home.svg";
import settingIcon from "../../assets/agent/Component 10/solar_settings-linear.svg";
import activityIcon from "../../assets/agent/Component 10/mdi_timeline-clock-outline.svg";
import advertIcon from "../../assets/agent/Component 10/icons8_advertising.svg";
import menuIcon from "../../assets/agent/majesticons_menu.png";
import HousePlusIcon from "../../assets/agent/material-symbols_add-home.png";

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  const navLinks = [
    { to: "/AdminDashBoard", label: "Home", icon: houseIcon },
    { to: "/recentAgent", label: "Activity", icon: activityIcon },
    { to: "/ListingAgent", label: "Listings", icon: HousePlusIcon },
    { to: "/OrderPage", label: "Order", icon: menuIcon },
    { to: "/DashBoardAdvert", label: "Advert", icon: advertIcon },
    { to: "/Settings", label: "Settings", icon: settingIcon },
  ];

  return (
    <div className="flex flex-col gap-4 p-7 bg-white w-full items-center shadow-sm relative h-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      {/* Close button - only visible on mobile */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </button>
      {navLinks.map(({ to, label, icon }) => {
        const isActive =
          to === "/AdminDashBoard"
            ? location.pathname === to
            : location.pathname.includes(to);

        return (
          <Link
            key={to}
            to={to}
            className={`flex items-center gap-4 w-[80%] px-2 py-2 rounded-lg 
              ${
                isActive
                  ? "bg-[#c8bee4] text-white border-r-2 border-[#2C1669]"
                  : ""
              }
              hover:opacity-90 hover:border-r-2 hover:border-[#2C1669]
              transition-all hover:bg-[#c8bee4] hover:text-[#2C1669]`}
          >
            <img
              src={icon}
              alt={`${label} icon`}
              className={`${isActive ? "fill-[#2C1669]" : ""} w-5 h-5`}
            />
            <span
              className={`font-semibold ${
                isActive ? "text-[#2C1669]" : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
