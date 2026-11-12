import React, { useState, createContext, useContext } from 'react';

const NewsListContext = createContext();

export const getNewsListContext = () => useContext(NewsListContext);

export const NewsListContextProvider = ({ children, variables }) => {
  const [contextData, updateContextData] = useState(variables);
  const setContextData = (data) => {
   updateContextData({ ...contextData, ...data });
  };
  return (<NewsListContext.Provider value={{ contextData, setContextData }}>
   {children}
  </NewsListContext.Provider>);
};