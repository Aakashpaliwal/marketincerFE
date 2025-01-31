import React from "react";
import { Navigate } from "react-router-dom";

// Protected Route component
const ProtectedRoute = ({ element, isAuthenticated }) => {
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/authentication/sign-in" />;
  }
  return element;
};

export default ProtectedRoute;
