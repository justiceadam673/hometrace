import React from "react";
import { createBrowserRouter } from "react-router-dom";

import AdminDashBoard from "./pages/agents/AdminDashBoard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListingsProvider } from "./context/ListingsContext";
import { OrdersProvider } from "./context/OrdersContext";
import { UserProvider } from "./context/UserContext";
import Layout from "./layout.jsx";
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

function App() {
  return (
    <UserProvider>
      <ListingsProvider>
        <OrdersProvider>
          <Routes>
            <Route path="/" element={<AdminSignIn />} />
            <Route path="/AdminUp" element={<AdminSignUp />} />
            <Route path="/AdminSignIn" element={<AdminSignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
            <Route path="/recentAgent" element={<RecentAgent />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/ListingAgent" element={<Listings />} />
            <Route path="/OrderPage" element={<OrderPage />} />
            {/* <Route
          path="/DashBoardAdvert"
          element={
            <ProtectedRoute>
              <AdminDashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/DashBoardProfile"
          element={
            <ProtectedRoute>
              <AdminDashBoard />
            </ProtectedRoute>
          }
        /> */}
            <Route path="*" element={<AdminSignIn />} />
          </Routes>
        </OrdersProvider>
      </ListingsProvider>
    </UserProvider>

  );
}

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
