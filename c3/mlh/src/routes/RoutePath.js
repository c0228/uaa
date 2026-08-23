import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
import AuthPage from "@Pages/AuthPage/index.js";
import SetPostalCode from "@Pages/ProfileSetupPage/SetPostalCode/index.js";
import SetCategories from "@Pages/ProfileSetupPage/SetCategories/index.js";
import HomePage from "@Pages/HomePage/index.js";
import Menu from "@Pages/Menu/index.js";
import Authentication from "@Pages/Authentication/index.js";
import { AuthProvider } from "@Provider/AuthProvider.js";
import PERMISSIONS from "@Permissions/index.js";
import Authorization from "./Authorization.js";

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
      <AuthProvider>
       <Routes>
         <Route exact path="/" element={<AuthPage/>} />
         <Route exact path="/onboarding/set-postal-code" element={<SetPostalCode />} />
         <Route exact path="/onboarding/choose-niches" element={<SetCategories />} />
         <Route exact path="/home" element={<HomePage />} />
         
         <Route path='/Customer' element={<Authorization permissions={[PERMISSIONS.CUSTOMER]} />}>
            <Route path='MyDashboard' element={<AuthPage />} />
          </Route>
         <Route exact path="/app/authentication" element={<Authentication />} />
         <Route exact path="/App/ChangePassword/:id" element={<Authentication />} />
         <Route exact path="/App/Home" element={<AuthPage/>} />
         <Route exact path="/App/Menu" element={<Menu />} />
       </Routes>
      </AuthProvider>
    </BrowserRouter>);
   };