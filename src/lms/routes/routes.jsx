import React from "react";
import { Navigate } from "react-router-dom";
import ProtectedLayout from "../../auth/ProtectedLayout";
import Layout from "../common/layout/Layout";

// Pages
import Dashboard from "../pages/dashboard/Dashboard";
import coursesRoutes from "./coursesRoutes";
import profileRoute from "./profileRoutes";
import TrackProgress from "../pages/track-progress/TrackProgress";
import PurchaseHistory from "../pages/purchase-history/PurchaseHistory";
import Subscription from "../pages/subscriptions/Subscription";
import Referral from "../pages/referral/Referral";
import Notification from "../pages/notification/Notification";

const routes = [
  {
    path: "/lms",
    element: (
      <ProtectedLayout>
        <Layout />
      </ProtectedLayout>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      ...coursesRoutes,
      ...profileRoute,
      { path: "track-progress", element: <TrackProgress /> },
      { path: "purchase-history", element: <PurchaseHistory /> },
      { path: "subscription", element: <Subscription /> },
      { path: "referral", element: <Referral /> },
      { path: "notifications", element: <Notification /> },
      { path: "*", element: <Navigate to="/lms"  /> },
    ],
  },
];

export default routes;
