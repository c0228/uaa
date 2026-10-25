import React, { useState, createContext, useContext } from 'react';

const ProfileContext = createContext();

export const getProfileContext = () => useContext(ProfileContext);

export const ProfileProvider = ({ children, variables }) => {
 const [contextData, updateContextData] = useState(variables);
 const setContextData = (data) => {
  updateContextData({ ...contextData, ...data });
 };
  return (<ProfileContext.Provider value={{ contextData, setContextData }}>
   {children}
  </ProfileContext.Provider>);
};