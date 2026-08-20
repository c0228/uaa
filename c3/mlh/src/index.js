import React from "react";
import ContextProvider from 'e-ui-react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import  { AppRouting } from '@Routes/RoutePath.js';
import { LoadFonts } from '@Utils/LoadFonts.js';
import './index.css';

LoadFonts();

import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(
    <GoogleOAuthProvider clientId="123679053573-ocithtt8a0fvnkggl7enm19rtcgppo3o.apps.googleusercontent.com">
    <ContextProvider variables={{ "test":"Hello" }}>
      <AppRouting />
   </ContextProvider>
   </GoogleOAuthProvider>);
 });
