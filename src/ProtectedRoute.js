import { React } from "react";
import { Navigate } from "react-router-dom";
import { token } from "./auth.js";

const ProtectedRoute = ({ children }) => {
  
  console.log(`Em ProtectedRoute o token é: ${token}`)

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  console.log("passei do if")

  return children;
};

export default ProtectedRoute;