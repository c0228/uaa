import React from "react";
import FontLoader from '@MainConfig/FontLoader.js';
import DisableRightClickNCopy from "@MainConfig/DisableRightClickNCopy.js";
import ContextProvider from 'e-ui-react';
import  { AppRouting } from '@MainConfig/Routing.js';
import './index.css';

import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(
    <ContextProvider variables={{ "resumeStatus":"closed" }}>
      <FontLoader />
      {/*<DisableRightClickNCopy />*/}
      <AppRouting />
   </ContextProvider>);
 });
 
 