import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import router from "./App"; // 👈 we'll export router from App.jsx

registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Reload?")) {
      window.location.reload();
    }
  },
  onOfflineReady() {
    console.log("App is ready to work offline");
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
