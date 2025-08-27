import React, { createContext, useContext, useState, useEffect } from "react";

const ListingsContext = createContext();

export const useListings = () => {
  const context = useContext(ListingsContext);
  if (!context) {
    throw new Error("useListings must be used within a ListingsProvider");
  }
  return context;
};

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState(() => {
    const savedListings = localStorage.getItem("listings");
    return savedListings ? JSON.parse(savedListings) : [];
  });

  // Save listings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("listings", JSON.stringify(listings));
  }, [listings]);

  const addListing = (listing) => {
    const newListing = {
      ...listing,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      views: 0,
      status: "active",
    };
    setListings((prev) => [...prev, newListing]);
  };

  const updateListing = (id, updates) => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === id ? { ...listing, ...updates } : listing
      )
    );
  };

  const removeListing = (id) => {
    setListings((prev) => prev.filter((listing) => listing.id !== id));
  };

  const incrementViews = (id) => {
    setListings((prev) =>
      prev.map((listing) =>
        listing.id === id
          ? { ...listing, views: (listing.views || 0) + 1 }
          : listing
      )
    );
  };

  return (
    <ListingsContext.Provider
      value={{
        listings,
        addListing,
        updateListing,
        removeListing,
        incrementViews,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
};
