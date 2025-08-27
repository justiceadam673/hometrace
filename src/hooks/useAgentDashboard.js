import { useState, useEffect } from "react";
import { useListings } from "../context/ListingsContext";
import { useOrders } from "../context/OrdersContext";

export const useAgentDashboard = () => {
  const { listings } = useListings();
  const { orders } = useOrders();
  const [dashboardData, setDashboardData] = useState({
    totalListings: 0,
    soldProperties: 0,
    listingViews: 0,
    lastActive: new Date().toISOString(),
  });

  useEffect(() => {
    const updateDashboardData = () => {
      try {
        // Get total active listings
        const activeListing = listings.filter(
          (listing) => listing.status === "active"
        ).length;

        // Get completed orders count
        const completedOrders = orders.filter(
          (order) => order.status === "Completed"
        ).length;

        // Get total views across all listings
        const totalViews = listings.reduce(
          (sum, listing) => sum + (listing.views || 0),
          0
        );

        // Update dashboard data
        const updatedData = {
          totalListings: activeListing,
          soldProperties: completedOrders,
          listingViews: totalViews,
          lastActive:
            localStorage.getItem("lastActive") || new Date().toISOString(),
        };

        setDashboardData(updatedData);
      } catch (error) {
        console.error("Error updating dashboard data:", error);
      }
    };

    updateDashboardData();

    // Update last active time
    localStorage.setItem("lastActive", new Date().toISOString());

    // Set up interval to refresh data
    const interval = setInterval(updateDashboardData, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, [listings, orders]);

  return dashboardData;
};
