import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/authContext/AuthContext";

// Protected Route component
const ProtectedRoute = ({ element }) => {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = true
  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/authentication/sign-in" />;
  }
  return element;
};

export default ProtectedRoute;
