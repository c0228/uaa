import React, { useState, createContext, useContext } from 'react';

const NichesContext = createContext();

export const getNichesContext = () => useContext(NichesContext);

export const NichesProvider = ({ children, variables }) => {
 const [contextData, updateContextData] = useState(variables);
 const setContextData = (data) => {
  updateContextData({ ...contextData, ...data });
 };
  return (<NichesContext.Provider value={{ contextData, setContextData }}>
   {children}
  </NichesContext.Provider>);
};