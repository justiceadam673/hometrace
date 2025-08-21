import React from "react";
import { EyeIcon, Clock, Tag } from "lucide-react";
import addHomeIcon from "../../assets/agent/material-symbols_add-home (1).png";

const HeroDashboard = () => {
  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      <div className="hidden md:block lg:block">
        <p className="text-[36px] font-semibold">Welcome back, Richard!</p>
        <p className="text-lg text-gray-600">
          Discover your perfect home from thousands of verified listings across
          Nigeria
        </p>
      </div>

      <article className="grid grid-cols-2 gap-4 md:flex lg:flex w-full">
        <div className="flex items-center bg-white shadow-sm rounded-lg p-2.5 md:p-4 gap-5">
          <div>
            <p className="text-[12px]">Total Listings</p>
            <span className="font-bold text-[21px]">200</span>
            <p className="text-[10px]">Recently viewed properties</p>
          </div>
          <span className="p-3 bg-[#2C1669] rounded-[8px] flex items-center justify-center">
            <img
              src={addHomeIcon}
              alt=""
              className="w-4.5 h-3.5 bg-[#2C1669] object-cover"
            />
          </span>
        </div>
        <div className="flex items-center bg-white shadow-sm rounded-lg  p-2.5 md:p-4 gap-5">
          <div>
            <p className="text-[12px]">Sold/Rented</p>
            <span className="font-bold text-[21px]">10</span>
            <p className="text-[10px]">Recently saved properties</p>
          </div>
          <span className="p-3 bg-[#1D2F82] rounded-[8px] flex items-center justify-center ">
            <Tag className="w-5 h-5 text-[#1D2F82] fill-white border-[#1D2F82] object-cover" />
          </span>
        </div>
        <div className="flex items-center bg-white shadow-sm rounded-lg  p-2.5 md:p-4 gap-5">
          <div>
            <p className="text-[12px]">Listing Views</p>
            <span className="font-bold text-[21px]">40</span>
            <p className="text-[10px]">Be the first to explore</p>
          </div>
          <span className="p-3 bg-[#00964E] rounded-[8px] flex items-center justify-center">
            <EyeIcon className="w-5 h-5 text-[#00964E] fill-white border-[#00964E]" />
          </span>
        </div>
        <div className="flex items-center bg-white shadow-sm rounded-lg  p-2.5 md:p-4 gap-5 md:gap-10 lg:gap-10">
          <div>
            <p className="text-[12px]">Recently Active</p>
            <span className="font-bold text-[21px]">10:43</span>
            <p className="text-[10px]">Last Login</p>
          </div>
          <span className="p-3 bg-[#13092E] rounded-[8px] flex items-center justify-center">
            <Clock className="w-5 h-5 text-transparent fill-white border-[#13092E]" />
          </span>
        </div>
      </article>
    </div>
  );
};

export default HeroDashboard;
