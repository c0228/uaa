import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import ContextProvider, { getAppContext } from 'e-ui-react';
import  { AppRouting } from '@AppRoutes/RoutePath.js';
import LoadFonts from '@Utils/FontFaceLoader.js';
import './index.css';

LoadFonts().then(() => {
import("react-dom/client").then((ReactDOM)=>{
  ReactDOM.createRoot(document.getElementById("root"))
   .render(
    <ContextProvider variables={{ }}>
      <GoogleOAuthProvider clientId="8953340790-lfj8gmvi5g2c3p0pmsatogu6e5c0mojj.apps.googleusercontent.com">
        <AppRouting />              
      </GoogleOAuthProvider>
   </ContextProvider>);
 });
});
