import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import searchIcon from "../../assets/agent/uil_search.png";
import profileIcon from "../../assets/agent/iconamoon_profile-fill.png";
import arrowIcon from "../../assets/agent/weui_arrow-outlined.png";
import menuIcon from "../../assets/agent/majesticons_menu.png";
import homtraceLogo from "../../assets/agent/HOMEtrace logo S1 1.svg";
import { useUser } from "../../context/UserContext";

const NavAgent = ({ setIsSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profilePic, updateProfilePic, logout } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/AdminSignIn");
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
      <ul className="hidden md:block lg:block relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="p-1 bg-[#2C1669] rounded-full flex items-center justify-center w-8 h-8">
            {profilePic ? (
              <img
                src={profilePic}
                alt=""
                className="w-6 h-6 object-cover rounded-full"
              />
            ) : (
              <img src={profileIcon} alt="" className="w-6 h-6 object-cover" />
            )}
          </span>
          <p>{user?.fullName || "User"}</p>
          <img
            src={arrowIcon}
            alt=""
            className={`transform transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
            <div className="py-1">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => fileInputRef.current?.click()}
              >
                Change Profile Picture
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => navigate("/Settings")}
              >
                Settings
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleProfilePicChange}
          className="hidden"
          accept="image/*"
        />
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
