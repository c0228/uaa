import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Unauthorized from "@Pages/UnAuthorized/index.js";
import { getDiffTimeFromNow, TIMESTAMP_TZ_FORMAT2 } from "e-ui-react";


export const Authenticated = () =>{
 const storedUserDetails = localStorage.getItem("USER_AUTH_DETAILS");
 const user = JSON.parse(storedUserDetails);
 // Check Expiry Time, if it exceeded return false
 const expiryDate = ( user?.expire && getDiffTimeFromNow(user.expire, TIMESTAMP_TZ_FORMAT2) );
 console.log("expireDate [Authenticated]: ", expiryDate);
 if(expiryDate?.remainingHours<0 && expiryDate?.remainingMinutes<-30){
  return false;
 } else {
  return (user?.data && Object.keys(user?.data)?.length>0);
 }
};

export const Authorization = ({ permissions }) => {
  let authStatus = 'UNAUTHORIZED';
  const storedUserDetails = localStorage.getItem("USER_AUTH_DETAILS");
  const user = JSON.parse(storedUserDetails);
  console.log("Authorization [user]: ", user);
  const isAuthenticated = Authenticated();
  if(isAuthenticated){
    const userpermission = user?.data?.userRole;
    if(userpermission && permissions?.includes(userpermission)){
      authStatus = 'AUTHORIZED';
    }
  }
  return (authStatus === 'AUTHORIZED')?(<Outlet />):(<Unauthorized isAuthenticated={isAuthenticated} />);
};

