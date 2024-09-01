import React, { useState, useEffect } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import Unauthorized from "@Pages/UnAuthorized/index.js";
import { useAuth } from "@Provider/AuthProvider";

const Authorization = ({ permissions }) => {
  // const { user } = useAuth();
  const [ isAllowed, setIsAllowed ] = useState();
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("USER_AUTH_DETAILS");
    const user = JSON.parse(storedUserDetails);
    const userpermission = user?.data?.userRole;
    if(userpermission){ setIsAllowed( permissions?.includes(userpermission) ); }
  }, []);
  return isAllowed ? <Outlet /> : <Unauthorized />;
/*
  const location = useLocation();
  if (userAuthData?.userRole) {
    const userpermission = [userAuthData?.userRole];
    const isAllowed = permissions.some((allowed) =>
      userpermission.includes(allowed)
    );
    return isAllowed ? <Outlet /> : <Unauthorized />;
  } */
 // return <Navigate to='/' state={{ path: location.pathname }} replace />;
};

export default Authorization;
