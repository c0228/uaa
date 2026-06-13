import React from "react";
import ContextProvider, { getAppContext } from 'e-ui-react';
import  { AppRouting } from '@AppRoutes/RoutePath.js';
import './index.css';

import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(
    <ContextProvider variables={{ }}>
      <AppRouting />
   </ContextProvider>);
 });
