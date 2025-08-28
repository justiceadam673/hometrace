import React from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../../assets/agent/herobg.jpg";
import { Check, TriangleAlert } from "lucide-react";

const Subscription = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    // For now, only basic plan takes you to dashboard
    if (plan === "basic") {
      navigate("/AdminDashBoard");
    }
  };

  return (
    <div className="h-screen flex flex-col max-w-[1881px] bg-[#FAFAFA] items-center justify-center">
      <div className="flex overflow-y-auto w-full">
        <div className="w-full p-10 flex flex-col gap-8">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-4xl font-semibold">Plans and pricing</h2>
            <p className="text-lg">
              Choose the plan that fits your property goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 w-full">
            {/* Basic Plan */}
            <div className="bg-white p-6 shadow flex flex-col items-center w-full gap-6 text-center">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-3xl font-semibold text-[#371B83]">Basic</h3>
                <p className="opacity-65">Free Plan for getting started</p>
              </div>
              <p className="text-4xl font-bold flex flex-col">
                N0<span className="text-lg font-medium">/month</span>
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex gap-4">
                  <Check size={16} />5 active listings
                </li>
                <li className="flex gap-4">
                  <TriangleAlert size={16} />
                  No priority placement
                </li>
              </ul>
              <button
                onClick={() => handleSelectPlan("basic")}
                className="w-full py-2 border bg-[#F7F7F7] hover:bg-gray-100 rounded-lg"
              >
                Select Plan
              </button>
            </div>

            {/* Standard Plan */}
            <div className="bg-white p-6 shadow text-center relative flex flex-col items-center gap-6 w-full">
              <span className="absolute -top-0 right-0 bg-[#371B83] text-white text-xs px-3 py-1 rounded-bl-4xl">
                Most popular
              </span>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-3xl font-semibold text-[#371B83]">
                  Standard
                </h3>
                <p className="opacity-65">Best for active agents</p>
              </div>
              <p className="text-4xl font-bold flex flex-col">
                N4,000<span className="text-lg font-medium">/month</span>
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex gap-4">
                  <Check size={16} />
                  Up to 20 active listings
                </li>
                <li className="flex gap-4">
                  <Check size={16} />
                  Priority in search results
                </li>
              </ul>
              <button
                onClick={() => handleSelectPlan("standard")}
                className="w-full py-2 bg-[#371B83] text-white hover:bg-[#2C1669] rounded-lg"
              >
                Select Plan
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-6 shadow flex flex-col items-center w-full gap-6 text-center">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-3xl font-semibold text-[#371B83]">
                  Premium
                </h3>
                <p className="opacity-65">For top-tier visibility</p>
              </div>
              <p className="text-4xl font-bold flex flex-col">
                N10,000<span className="text-lg font-medium">/month</span>
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex gap-4">
                  <Check size={16} />
                  Unlimited listings
                </li>
                <li className="flex gap-4">
                  <Check size={16} />
                  Priority in search results
                </li>
              </ul>
              <button
                onClick={() => handleSelectPlan("premium")}
                className="w-full py-2 border text-white bg-[#371B83] hover:bg-[#2C1669] rounded-lg"
              >
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
