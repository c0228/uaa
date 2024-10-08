import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const login = (userAuthDetails, redirectPath) => {
    let currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 1); // Add Hour Expiry Timeout
    const details = { expire: currentDate, data: userAuthDetails };
    localStorage.setItem("USER_AUTH_DETAILS", JSON.stringify(details));
    window.location.href = process.env.PROJECT_URL + redirectPath;
  };
  const logout = () => {
    localStorage.removeItem("USER_AUTH_DETAILS");
    window.location.href = process.env.PROJECT_URL;
  };
  
  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
