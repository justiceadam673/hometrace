import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AdminDashBoard from "./pages/agents/AdminDashBoard.jsx";
import RecentAgent from "./pages/agents/recentAgent.jsx";
import Settings from "./pages/agents/Settings.jsx";
import Listings from "./pages/agents/ListingAgents.jsx";
import AdminSignUp from "./pages/agents/AdminUp.jsx";
import AdminSignIn from "./pages/agents/AdminSignIn.jsx";
import OrderPage from "./pages/agents/OrderPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";

// 🚨 If you want protected routes, you can wrap them inside "element"
// with your <ProtectedRoute> component.

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/AdminUp", element: <AdminSignUp /> },
  { path: "/AdminSignIn", element: <AdminSignIn /> },
  { path: "/AdminDashBoard", element: <AdminDashBoard /> },
  { path: "/recentAgent", element: <RecentAgent /> },
  { path: "/Settings", element: <Settings /> },
  { path: "/ListingAgent", element: <Listings /> },
  { path: "/OrderPage", element: <OrderPage /> },
  { path: "*", element: <AdminSignIn /> },
]);

export default router;
