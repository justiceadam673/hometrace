import React, { useState } from "react";
import NavAgent from "../../components/Agent/navAgents.jsx";
import Sidebar from "../../components/Agent/sidebar.jsx";
import profileIcon from "../../assets/agent/iconamoon_profile-fill.png";
import {
  ChevronDown,
  ChevronUp,
  Plus,
  TriangleAlert,
  Check,
  Lock,
} from "lucide-react";

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [showTabs, setShowTabs] = useState(false);

  const tabs = [
    { key: "personal", label: "Personal Info" },
    { key: "notification", label: "Notification" },
    { key: "security", label: "Security" },
    { key: "subscription", label: "Subscription" },
  ];
  const [listingAlert, setListingAlert] = useState(true);
  const [priceDropAlert, setPriceDropAlert] = useState(true);
  return (
    <div className="h-auto bg-[#FAFAFA]">
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
        <div className="flex flex-col p-8 md:mt-8 w-full bg-white rounded-lg shadow-sm gap-6 md:mr-8">
          <h1 className="text-2xl font-semibold">Profile</h1>

          {/* Tabs */}
          <div className="relative">
            {/* Desktop Tabs */}
            <div className="md:flex md:justify-between border-none w-full hidden">
              {[
                { key: "personal", label: "Personal Info" },
                { key: "notification", label: "Notification" },
                { key: "security", label: "Security" },
                { key: "subscription", label: "Subscription" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`pb-2 w-1/4 ${
                    activeTab === tab.key
                      ? "border-b-2 border-[#321876] text-black"
                      : "text-gray-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Mobile Tabs Dropdown */}
            <div className="md:hidden flex flex-col items-center w-full">
              <button
                onClick={() => setShowTabs(!showTabs)}
                className="flex items-center gap-4 p-3 bg-white border-b-2 border-[#321876] mx-auto"
              >
                <span className="font-medium">
                  {tabs.find((tab) => tab.key === activeTab)?.label}
                </span>
                {showTabs ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              {showTabs && (
                <div className="absolute left-1/2 -translate-x-1/2 z-10 mt-1 w-60 bg-white rounded-lg shadow-lg mx-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => {
                        setActiveTab(tab.key);
                        setShowTabs(false);
                      }}
                      className={`block w-full text-left px-4 py-2 ${
                        activeTab === tab.key
                          ? "bg-gray-100 text-[#321876]"
                          : "text-gray-700"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "personal" && (
            <div className="bg-white rounded-lg p-6 border-none">
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="relative flex flex-col items-center">
                  <span className="p-1 bg-[#2C1669] rounded-full flex items-center justify-center md:mr-auto">
                    <img
                      src={profileIcon}
                      alt=""
                      className="w-20 h-20 object-cover"
                    />
                  </span>
                  <button
                    className="absolute bottom-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-50"
                    onClick={() =>
                      document.getElementById("profileImage").click()
                    }
                  >
                    <Plus size={16} />
                  </button>
                  <input
                    type="file"
                    id="profileImage"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      // Handle image change here
                      console.log(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="hidden md:block text-center">
                  <h2 className="text-lg font-semibold">Richard Ade</h2>
                  <p className="text-gray-500">richardade@gmail.com</p>
                </div>
              </div>

              <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Richard Ade"
                    className="w-full mt-1 p-2.5 border rounded-lg outline-none bg-[#F9F9F9]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="richardade@gmail.com"
                    className="w-full mt-1 p-2.5 border rounded-lg outline-none bg-[#F9F9F9]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  {/* Desktop Select */}
                  <select className="w-full mt-1 p-2.5 border rounded-lg md:block hidden">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  {/* Mobile Radio Buttons */}
                  <div className="flex gap-4 md:hidden">
                    <label className="flex items-center gap-2 p-2 border-1 rounded-md">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        className="w-4 h-4 text-[#321876] focus:ring-[#321876]"
                      />
                      <span className="text-sm">Male</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 border-1 rounded-md">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        className="w-4 h-4 text-[#321876] focus:ring-[#321876]"
                      />
                      <span className="text-sm">Female</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    defaultValue="+234 816 888 4332"
                    className="w-full mt-1 p-2.5 border rounded-lg outline-none bg-[#F9F9F9]"
                  />
                </div>

                {/* <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button> */}
              </form>
            </div>
          )}

          {activeTab === "notification" && (
            <div className="bg-white flex flex-col gap-6 w-full">
              {/* New Listing Alert */}
              <div className="flex flex-col w-full">
                <span className="flex w-full">
                  <h2 className="text-2xl font-semibold flex justify-start w-[275%]">
                    New Listing{" "}
                    <span className="hidden md:flex ml-1.5"> Alert</span>
                  </h2>
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => setListingAlert((v) => !v)}
                      className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                        listingAlert ? "bg-black" : "bg-gray-300"
                      }`}
                      aria-pressed={listingAlert}
                    >
                      <span
                        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                          listingAlert ? "translate-x-5" : ""
                        }`}
                      ></span>
                    </button>
                  </div>
                </span>
                <p className="opacity-65 md:w-[94%]">
                  Stay informed with instant alerts whenever new properties drop
                  in your favorite locations. Never miss out on a potential
                  dream home again.
                </p>
              </div>
              {/* Price Drop Alert */}
              <div className="flex flex-col w-full">
                <span className="flex w-full">
                  <h2 className="text-2xl font-semibold flex justify-start w-[275%]">
                    Price Drop Alert
                  </h2>
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => setPriceDropAlert((v) => !v)}
                      className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                        priceDropAlert ? "bg-black" : "bg-gray-300"
                      }`}
                      aria-pressed={priceDropAlert}
                    >
                      <span
                        className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
                          priceDropAlert ? "translate-x-5" : ""
                        }`}
                      ></span>
                    </button>
                  </div>
                </span>
                <p className="opacity-65 md:w-[94%]">
                  Be the first to know when a property you've saved gets a price
                  drop so you can act fast and secure the best deal before it's
                  gone.
                </p>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-[#E1DDEC] p-6 rounded-lg flex gap-4 items-center">
              <Lock size={55} className="p-3 rounded-sm bg-white text-black" />
              <span className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">
                  Strong Password Protection
                </h2>
                <p className="opacity-65">
                  Always use a stong password that includes letters, numbers,
                  and special characters. Never share your password with others.
                </p>
              </span>
            </div>
          )}

          {activeTab === "subscription" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Basic Plan */}
              <div className="bg-white p-6 rounded-lg shadow  flex flex-col items-center w-full gap-4">
                <h3 className="text-lg font-semibold ">Basic</h3>
                <p className="opacity-65 ">Free Plan for getting started</p>
                <p className="text-3xl font-bold  flex flex-col">
                  ₦0<span className="text-base">/month</span>
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex gap-4">
                    {" "}
                    <Check size={16} />5 active listings
                  </li>
                  <li className="flex gap-4">
                    {" "}
                    <TriangleAlert size={16} />
                    No priority placement
                  </li>
                  <li className="flex gap-4">
                    <TriangleAlert size={16} /> No verified badge
                  </li>
                </ul>
                <button className="w-full py-2 border  bg-[#F7F7F7] rounded-lg">
                  Select Plan
                </button>
              </div>

              {/* Standard Plan */}
              <div className="bg-white p-6 rounded-lg shadow text-center relative  flex flex-col items-center gap-4 w-full">
                <span className="absolute -top-0 right-0 bg-[#371B83] text-white text-xs px-3 py-1 rounded-bl-4xl">
                  Most popular
                </span>
                <h3 className="text-lg font-semibold ">Standard</h3>
                <p className="opacity-65 ">Best for active agents</p>
                <p className="text-3xl font-bold flex flex-col">
                  ₦4,000<span className="text-base">/month</span>
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex gap-4">
                    {" "}
                    <Check size={16} />
                    Up to 20 active listings
                  </li>
                  <li className="flex gap-4">
                    {" "}
                    <Check size={16} />
                    Priority in search results
                  </li>
                  <li className="flex gap-4">
                    {" "}
                    <Check size={16} />
                    Verified badge
                  </li>
                </ul>
                <button className="w-full py-2 bg-[#371B83] text-white rounded-lg">
                  Select Plan
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center w-full gap-4">
                <h3 className="text-lg font-semibold ">Premium</h3>
                <p className="opacity-65 ">For top-tier visibility</p>
                <p className="text-3xl font-bold flex flex-col">
                  ₦10,000<span className="text-base">/month</span>
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex gap-4">
                    {" "}
                    <Check size={16} />
                    Unlimited listings
                  </li>
                  <li className="flex gap-4">
                    {" "}
                    <Check size={16} />
                    Priority in search results
                  </li>
                  <li className="flex gap-4">
                    {" "}
                    <Check size={16} />
                    Verified badge
                  </li>
                </ul>
                <button className="w-full py-2 border text-white rounded-lg bg-[#371B83]">
                  Select Plan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
