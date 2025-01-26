import React from "react";
import FontLoader from '@Config/FontLoader.js';
import ContextProvider from 'e-ui-react';
import  { AppRouting } from '@Config/Routing.js';
import './index.css';

import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(
    <ContextProvider variables={{ "resumeStatus":"closed" }}>
      <FontLoader />
      <AppRouting />
   </ContextProvider>);
 });
 
 