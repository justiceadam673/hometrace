import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavAgent from "../../components/Agent/navAgents.jsx";
import duplexImage from "../../assets/agent/duplex.jpg";
import familyImage from "../../assets/agent/family.jpg";
import spaciousImage from "../../assets/agent/spacious.jpg";
import { ChevronDown, Plus, Verified, MapPin } from "lucide-react";
import HouseForm from "../../components/Agent/ListingForm.jsx";
import LandForm from "../../components/Agent/LandForm.jsx";
import Sidebar from "../../components/Agent/sidebar.jsx";

const Listings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showLandForm, setShowLandForm] = useState(false);
  const [showHouseForm, setShowHouseForm] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [editingListing, setEditingListing] = useState(null);
  const [bookmarkedListings, setBookmarkedListings] = useState(new Set());

  const toggleBookmark = (listingId) => {
    setBookmarkedListings((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(listingId)) {
        newBookmarks.delete(listingId);
      } else {
        newBookmarks.add(listingId);
      }
      return newBookmarks;
    });
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest(".dropdown-container")) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);
  const [listings, setListings] = useState([
    {
      id: 1,
      type: "house",
      title: "Executive Duplex",
      price: " ₦15, OOO, OOO",
      description: "Beautiful 2-bedroom apartment with city view",
      image: duplexImage,
      location: "Behind ECWA Staff, Plateau State",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,200 sqft",
    },
    {
      id: 2,
      type: "land",
      title: "Family House",
      price: " ₦10, OOO, OOO",
      description: "Beautiful 2-bedroom apartment with city view",
      image: spaciousImage,
      location: "Behind ECWA Staff, Plateau State",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,200 sqft",
    },
    {
      id: 3,
      title: "Spacious Family Home",
      price: " ₦20, OOO, OOO",
      description: "Beautiful 2-bedroom apartment with city view",
      image: familyImage,
      location: "Behind ECWA Staff, Plateau State",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,200 sqft",
    },
    {
      id: 4,
      title: "Executive Duplex",
      price: " ₦15, OOO, OOO",
      description: "Beautiful 2-bedroom apartment with city view",
      image: duplexImage,
      location: "Behind ECWA Staff, Plateau State",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,200 sqft",
    },
    {
      id: 5,
      title: "Family House",
      price: " ₦10, OOO, OOO",
      description: "Beautiful 2-bedroom apartment with city view",
      image: spaciousImage,
      location: "Behind ECWA Staff, Plateau State",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,200 sqft",
    },
    {
      id: 6,
      title: "Spacious Family Home",
      price: " ₦20, OOO, OOO",
      description: "Beautiful 2-bedroom apartment with city view",
      image: familyImage,
      location: "Behind ECWA Staff, Plateau State",
      bedrooms: 2,
      bathrooms: 2,
      size: "1,200 sqft",
    },
    // You can add more sample listings here
  ]);

  const handleAddHouseListing = (newListing) => {
    setListings((prev) => [
      ...prev,
      { ...newListing, id: Date.now(), type: "house" },
    ]);
    setShowHouseForm(false);
  };

  const handleAddLandListing = (newListing) => {
    setListings((prev) => [
      ...prev,
      { ...newListing, id: Date.now(), type: "land" },
    ]);
    setShowLandForm(false);
  };

  const handleEditListing = (updatedListing) => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === updatedListing.id
          ? { ...updatedListing, type: listing.type }
          : listing
      )
    );
    setEditingListing(null);
    setShowHouseForm(false);
    setShowLandForm(false);
  };

  return (
    <section className="min-h-screen bg-[#FAFAFA]">
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

        {/* Main Content */}
        <div className="w-full">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">My Listings</h1>
              <div className="relative dropdown-container">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="hidden items-center gap-2 bg-[#2C1669] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors md-flex lg:flex"
                >
                  Add Property
                  <ChevronDown
                    size={20}
                    className={`transform transition-transform ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <Plus
                  size={24}
                  className={`transform transition-transform md:hidden  ${
                    showDropdown ? "rotate-45" : ""
                  }`}
                  onClick={() => setShowDropdown(!showDropdown)}
                />

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                    <button
                      onClick={() => {
                        setShowHouseForm(true);
                        setShowDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left hover:bg-[#2C1669] hover:text-white transition-colors"
                    >
                      House / Apartment
                    </button>
                    <button
                      onClick={() => {
                        setShowLandForm(true);
                        setShowDropdown(false);
                      }}
                      className="w-full px-4 py-3 text-left border-t hover:bg-[#2C1669] hover:text-white transition-colors"
                    >
                      Land
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {listings.map((listing) => (
                <div
                  key={listing.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden mx-auto"
                >
                  <div className="relative">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-[197px] object-cover rounded-t-md"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleBookmark(listing.id);
                      }}
                      className="absolute top-2 right-2 focus:outline-none bg-white rounded-full p-1.5 shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          bookmarkedListings.has(listing.id)
                            ? "#2C1669"
                            : "none"
                        }
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#2C1669"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-3">
                    <div className="flex flex-col gap-.5 justify-between items-start mb-2">
                      <div className="flex justify-between w-full">
                        <h2 className="text-[1rem] font-semibold">
                          {listing.title}
                        </h2>
                        <div className="flex items-center gap-2">
                          <Verified
                            className="text-white fill-blue-700"
                            size={28}
                          />
                        </div>
                      </div>
                      <p className="text-[#321876] font-bold text-[20px]">
                        {listing.price}
                      </p>
                    </div>
                    <p className="text-gray-600 mb-4 hidden">
                      {listing.description}
                    </p>
                    <div className=" w-full">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1 ">
                          <MapPin size={18} />
                          <p className="font-[12px] opacity-65">
                            {listing.location}
                          </p>
                        </div>
                        <div className="hidden">
                          <p className="text-sm text-gray-500">Size</p>
                          <p className="font-medium">{listing.size}</p>
                        </div>
                        <div className="hidden">
                          <p className="text-sm text-gray-500">Bedrooms</p>
                          <p className="font-medium">{listing.bedrooms}</p>
                        </div>
                        <div className="hidden">
                          <p className="text-sm text-gray-500">Bathrooms</p>
                          <p className="font-medium">{listing.bathrooms}</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setEditingListing(listing);
                        if (listing.type === "house") {
                          setShowHouseForm(true);
                        } else {
                          setShowLandForm(true);
                        }
                      }}
                      className="w-full text-[#464646] opacity-80 font-semibold px-3 py-2 border border:opacity-65 rounded-[9px] mt-4 hover:bg-[#321876] hover:text-white"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Form modals */}
            {(showHouseForm ||
              (editingListing && editingListing.type === "house")) && (
              <div className="fixed inset-0 bg-gray-600/25 backdrop-blur-[2px] transition-all flex justify-center items-center z-[60]">
                <HouseForm
                  onSubmit={
                    editingListing ? handleEditListing : handleAddHouseListing
                  }
                  onClose={() => {
                    setShowHouseForm(false);
                    setEditingListing(null);
                  }}
                  initialData={editingListing}
                  isEditing={!!editingListing}
                />
              </div>
            )}
            {(showLandForm ||
              (editingListing && editingListing.type === "land")) && (
              <div className="fixed inset-0 bg-gray-600/25 backdrop-blur-[2px] transition-all flex justify-center items-center z-[60]">
                <LandForm
                  onSubmit={
                    editingListing ? handleEditListing : handleAddLandListing
                  }
                  onClose={() => {
                    setShowLandForm(false);
                    setEditingListing(null);
                  }}
                  initialData={editingListing}
                  isEditing={!!editingListing}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listings;
