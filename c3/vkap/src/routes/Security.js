import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Unauthorized from "@Pages/UnAuthorized/index.js";

const storedUserDetails = localStorage.getItem("USER_AUTH_DETAILS");
const user = JSON.parse(storedUserDetails);

export const Authenticated = () =>{
 return (user?.data && Object.keys(user?.data)?.length>0);
};

export const Authorization = ({ permissions }) => {
  let authStatus = 'UNAUTHORIZED';
  if(Authenticated()){
    const userpermission = user?.data?.userRole;
    if(userpermission && permissions?.includes(userpermission)){
      authStatus = 'AUTHORIZED';
    }
  }
  return (authStatus === 'AUTHORIZED')?(<Outlet />):(<Unauthorized />);
};

