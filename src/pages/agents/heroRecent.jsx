import React from "react";
// import { FaUserCircle } from "react-icons/fa";
import { UserRoundPlusIcon, HousePlusIcon } from "lucide-react";
import listIcon from "../../assets/agent/eos-icons_role-binding-outlined.svg";
import recentIcon from "../../assets/agent/iconsax-profile-add.png";
import { Link } from "react-router-dom";

const HeroRecent = () => {
  // Mock data for recent activities
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
      message: "John Okoro viewed your listing in Lekki Phase 1",
      time: "18mins ago",
      status: "viewed",
    },
    {
      message: "John Okoro viewed your listing in Lekki Phase 1",
      time: "1 day ago",
      status: "viewed",
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
      default:
        return <UserRoundPlusIcon className="w-6 h-6 text-gray-600" />;
    }
  };

  return (
    <div className="flex flex-col gap-12 mt-8 px-6 md:flex-row">
      <div className="border border-gray-200 rounded-xl p-6 w-full max-w-[550px] bg-white shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Activities
          </h2>
          <Link
            to="/recentAgent"
            className="text-blue-600 text-sm hover:text-blue-700"
          >
            View All
          </Link>
        </div>

        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li
              key={index}
              className="flex items-start justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="flex items-start gap-3">
                {getStatusIcon(activity.status)}
                <div className="flex flex-col">
                  <span className="text-sm text-gray-700">
                    {activity.message}
                  </span>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-4 h-fit md:w-1/3 lg:w-1/2">
        <div className="bg-[#f8f8f8] rounded-[12px] p-6">
          <Link
            to="/ListingAgent"
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <div className="p-5 bg-[#E1DDEC] rounded-full mb-2">
              <img src={listIcon} alt="Add listing" className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              Add New Listing
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroRecent;
