import React from "react";
import ContextProvider, { getAppContext } from 'e-ui-react';
import  { AppRouting } from '@AppRoutes/RoutePath.js';
import LoadFonts from '@Utils/FontFaceLoader.js';
import './index.css';

LoadFonts().then(() => {
import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(
    <ContextProvider variables={{ }}>
      <AppRouting />
   </ContextProvider>);
 });
});
