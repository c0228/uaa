import React from "react";

const useAuth = () =>{
 let userDetails = localStorage.getItem("MLH_USER_DETAILS") ?? '{}';
    userDetails = JSON.parse(userDetails);
 return { userDetails };
};

export default useAuth;