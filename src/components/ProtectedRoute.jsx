import { Navigate } from "react-router-dom";

// Mock Authentication and Role-checking Functions
const isAuthenticated = () => {
  // Replace with actual authentication logic
  return localStorage.getItem("user") !== null;
};

const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.role || null;
};

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ role, children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  const userRole = getUserRole();
  if (userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
