import React, { useState } from "react";
import { EyeIcon, Clock, Tag, ChevronRight } from "lucide-react";
import addHomeIcon from "../../assets/agent/material-symbols_add-home (1).png";
import { useAgentDashboard } from "../../hooks/useAgentDashboard";
import { useUser } from "../../context/UserContext";

const formatLastActive = (lastLoginTime) => {
  if (!lastLoginTime) return "N/A";

  const now = new Date();
  const loginTime = new Date(lastLoginTime);
  const diffInMinutes = Math.floor((now - loginTime) / 1000 / 60);

  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  } else if (diffInMinutes < 1440) {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours}h ago`;
  } else {
    return loginTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
};

const HeroDashboard = () => {
  const dashboardData = useAgentDashboard();
  const { user } = useUser();
  const [isNextClicked, setIsNextClicked] = useState(false);
  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      <div className="hidden md:block lg:block">
        <p className="text-[36px] font-semibold">
          Welcome back, {user?.fullName || "User"}!
        </p>
        <p className="text-lg text-gray-600">
          Discover your perfect home from thousands of verified listings across
          Nigeria
        </p>
      </div>

      <article className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full">
        <div className="flex items-center bg-white shadow-sm rounded-lg p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 md:gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-600">
              Total Listings
            </p>
            <span className="font-bold text-[16px] sm:text-[18px] md:text-[21px] block truncate">
              {dashboardData.totalListings}
            </span>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500">
              Active property listings
            </p>
          </div>
          <span className="p-2 sm:p-2.5 md:p-3 bg-[#2C1669] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] flex-shrink-0 flex items-center justify-center">
            <img
              src={addHomeIcon}
              alt="Listings"
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#2C1669] object-cover"
            />
          </span>
        </div>
        <div className="flex items-center bg-white shadow-sm rounded-lg p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 md:gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-600">
              Sold/Rented
            </p>
            <span className="font-bold text-[16px] sm:text-[18px] md:text-[21px] block truncate">
              {dashboardData.soldProperties}
            </span>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500">
              Completed transactions
            </p>
          </div>
          <span className="p-2 sm:p-2.5 md:p-3 bg-[#1D2F82] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] flex-shrink-0 flex items-center justify-center">
            <Tag className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#1D2F82] fill-white border-[#1D2F82]" />
          </span>
        </div>
        <div className="flex items-center bg-white shadow-sm rounded-lg p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 md:gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-600">
              Listing Views
            </p>
            <span className="font-bold text-[16px] sm:text-[18px] md:text-[21px] block truncate">
              {dashboardData.listingViews}
            </span>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500">
              Total property views
            </p>
          </div>
          <span className="p-2 sm:p-2.5 md:p-3 bg-[#00964E] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] flex-shrink-0 flex items-center justify-center">
            <EyeIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#00964E] fill-white border-[#00964E]" />
          </span>
        </div>
        <div className="flex items-center bg-white shadow-sm rounded-lg p-2 sm:p-3 md:p-4 gap-2 sm:gap-3 md:gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-600">
              Recently Active
            </p>
            <span className="font-bold text-[16px] sm:text-[18px] md:text-[21px] block truncate">
              {formatLastActive(dashboardData.lastActive)}
            </span>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-500">
              Last active time
            </p>
          </div>
          <span className="p-2 sm:p-2.5 md:p-3 bg-[#13092E] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] flex-shrink-0 flex items-center justify-center">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-transparent fill-white border-[#13092E]" />
          </span>
        </div>
      </article>
    </div>
  );
};

export default HeroDashboard;
