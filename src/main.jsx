import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import { router, AppProviders } from "./App";

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
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  </React.StrictMode>
);
