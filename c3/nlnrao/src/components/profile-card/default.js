import React, { useState, createContext, useContext } from "react";

const ProfileContext = createContext();
const getProfileContext = ()=> useContext(ProfileContext);
const ProfileContextProvider = ({ children, variables }) =>{
 const [contextData, updateContextData] = useState(variables);
 
};