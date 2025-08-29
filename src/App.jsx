// App.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminDashBoard from "./pages/agents/AdminDashBoard.jsx";
import { ListingsProvider } from "./context/ListingsContext";
import { OrdersProvider } from "./context/OrdersContext";
import { UserProvider } from "./context/UserContext";
import RecentAgent from "./pages/agents/recentAgent.jsx";
import Settings from "./pages/agents/Settings.jsx";
import Listings from "./pages/agents/ListingAgents.jsx";
import AdminSignUp from "./pages/agents/AdminUp.jsx";
import AdminSignIn from "./pages/agents/AdminSignIn.jsx";
import OrderPage from "./pages/agents/OrderPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Verification from "./pages/agents/Verification.jsx";
import ForgotPassword from "./pages/agents/ForgotPassword.jsx";
import Subscription from "./pages/agents/Subscription.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/AdminUp", element: <AdminSignUp /> },
  { path: "/AdminSignIn", element: <AdminSignIn /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/verification", element: <Verification /> },
  { path: "/subscription", element: <Subscription /> },
  { path: "/AdminDashBoard", element: <AdminDashBoard /> },
  { path: "/recentAgent", element: <RecentAgent /> },
  { path: "/Settings", element: <Settings /> },
  { path: "/ListingAgent", element: <Listings /> },
  { path: "/OrderPage", element: <OrderPage /> },
  { path: "*", element: <AdminSignIn /> },
]);

// ✅ Just wrap providers, no RouterProvider here
export function AppProviders({ children }) {
  return (
    <UserProvider>
      <ListingsProvider>
        <OrdersProvider>{children}</OrdersProvider>
      </ListingsProvider>
    </UserProvider>
  );
}
