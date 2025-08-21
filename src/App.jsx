import React from "react";
import { Icon } from "@iconify/react";
import AdminDashBoard from "./pages/agents/AdminDashBoard.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout.jsx";
import RecentAgent from "./pages/agents/recentAgent.jsx";
import Settings from "./pages/agents/Settings.jsx";
import Listings from "./pages/agents/ListingAgents.jsx";
import DashboardAdvert from "./pages/agents/AdminDashBoard.jsx";
import AdminSignUp from "./pages/agents/AdminUp.jsx";
import AdminSignIn from "./pages/agents/AdminSignIn.jsx";
import ProtectedRoute from "./pages/agents/ProtectedRoute.jsx";
import OrderPage from "./pages/agents/OrderPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminSignIn />} />
      <Route path="/AdminUp" element={<AdminSignUp />} />
      <Route path="/AdminSignIn" element={<AdminSignIn />} />
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
  );
}

export default App;
