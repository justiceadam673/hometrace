import React from "react";
import { useLocation } from "react-router-dom";
import searchIcon from "../../assets/agent/uil_search.png";
import profileIcon from "../../assets/agent/iconamoon_profile-fill.png";
import arrowIcon from "../../assets/agent/weui_arrow-outlined.png";
import menuIcon from "../../assets/agent/majesticons_menu.png";
import homtraceLogo from "../../assets/agent/HOMEtrace logo S1 1.svg";

const NavAgent = ({ setIsSidebarOpen }) => {
  const location = useLocation();

  const getHeaderContent = () => {
    switch (location.pathname) {
      case "/AdminDashBoard":
        return {
          title: "Welcome Back!",
          subtitle: "Here's what's happening on Hometrace right now",
        };
      case "/recentAgent":
        return {
          title: "Recent Activity",
          subtitle: "",
        };
      case "/ListingAgent":
        return {
          title: "Listings",
          subtitle: "",
        };
      case "/OrderPage":
        return {
          title: "Orders",
          subtitle: "",
        };
      case "/DashBoardAdvert":
        return {
          title: "Advertisements",
          subtitle: "Manage your advertising campaigns",
        };
      case "/Settings":
        return {
          title: "Settings",
          subtitle: "",
        };
      default:
        return {
          title: "Welcome Back!",
          subtitle: "Here's what's happening on Hometrace right now",
        };
    }
  };

  const headerContent = getHeaderContent();

  return (
    <nav className="flex justify-between items-center bg-white p-2 md:p-3 md:shadow-md md:pl-12 md:pr-12 w-full">
      <ul className="hidden md:flex lg:flex">
        <span className="flex items-center gap-2">
          <img src={homtraceLogo} alt="" />
          <h1 className="text-[14px] text-black font-extrabold">HomeTrace</h1>
        </span>
      </ul>
      <ul className="hidden">
        <div className="flex gap-2 border border-gray-300 p-2 w-[32rem]">
          <img src={searchIcon} alt="" className="w-6 h-6 fill-black" />
          <input
            type="search"
            placeholder="Search for location and properties"
            className="border-none outline-none w-full"
          />
        </div>
      </ul>
      <ul className="hidden md:block lg:block">
        <div className="flex items-center gap-2">
          <span className="p-1 bg-[#2C1669] rounded-full flex items-center justify-center">
            <img src={profileIcon} alt="" className="w-6 h-6 object-cover" />
          </span>
          <p>Richard Ale</p>
          <img src={arrowIcon} alt="" />
        </div>
      </ul>
      <ul className="md:hidden lg:hidden">
        <p className="text-[22px] font-semibold">{headerContent.title}</p>
        <p className="text-[11px] opacity-65">{headerContent.subtitle}</p>
      </ul>
      <ul className="md:hidden lg:hidden">
        <button onClick={() => setIsSidebarOpen(true)} className="p-2">
          <img src={menuIcon} alt="Menu" className="w-8 h-8" />
        </button>
      </ul>
    </nav>
  );
};

export default NavAgent;
