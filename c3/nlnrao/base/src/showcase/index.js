import React from "react";
import FontLoader from '@MainConfig/FontLoader.js';
import ContextProvider from 'e-ui-react';
import  { AppRouting } from '@ShowcaseConfig/Routing.js';
import './index.css';

import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(
    <ContextProvider variables={{ }}>
      <FontLoader prefix={process.env.PROJECT_SHOWCASE_URL} />
      {/*<DisableRightClickNCopy />*/}
      <AppRouting />
   </ContextProvider>);
 });
 
 