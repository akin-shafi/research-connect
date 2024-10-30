import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Discovery from "./pages/Discovery";
import Equipment from "./pages/Equipment";
import Explore from "./pages/Explore";
import Publications from "./pages/Publications";
import ResearcherDashboard from "./pages/dashboards/ResearcherDashboard";
import InnovatorDashboard from "./pages/dashboards/InnovatorDashboard";
import InstitutionDashboard from "./pages/dashboards/InstitutionDashboard";

// Components
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./components/MainLayout";

// Routing Configuration
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/ideas", element: <Discovery /> },
      { path: "/equipment", element: <Equipment /> },
      { path: "/explore", element: <Explore /> },
      { path: "/publications", element: <Publications /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
  {
    path: "/dashboard/researcher",
    element: (
      <ProtectedRoute role="researcher">
        <ResearcherDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/innovator",
    element: (
      <ProtectedRoute role="innovator">
        <InnovatorDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/institution",
    element: (
      <ProtectedRoute role="institution">
        <InstitutionDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
