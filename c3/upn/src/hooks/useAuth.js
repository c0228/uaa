import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetUserProfile } from "@Services/AuthManager.js";

export const useAuth = () =>{
 const { lang } = useParams();
 const userDetails = GetUserProfile();
 const isLogged = Object.keys(userDetails)?.length>0;
 return { userDetails, isLogged, lang };
};