import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
import Home from "@Pages/Home/index.js";
import CurrentAffairs from "@Pages/CurrentAffairs/index.js";
import Menu from "@Pages/Menu/index.js";
import { AuthProvider } from "@Provider/AuthProvider.js";
import PERMISSIONS from "@Permissions/index.js";
import Authorization from "./Authorization.js";

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
      <AuthProvider>
       <Routes>
         <Route exact path="/" element={<Welcome/>} />
         <Route path='/Customer' element={<Authorization permissions={[PERMISSIONS.CUSTOMER]} />}>
            <Route path='MyDashboard' element={<Home />} />
         </Route>
         <Route exact path="/home" element={<Home/>} />
         <Route exact path="/daily-current-affairs" element={<CurrentAffairs />} />
         <Route exact path="/daily-current-affairs/date/:date" element={<CurrentAffairs />} />
         <Route exact path="/daily-current-affairs/list/:category" element={<CurrentAffairs />} />
         <Route exact path="/daily-current-affairs/list/:category/:subCategory" element={<CurrentAffairs />} />
       </Routes>
      </AuthProvider>
    </BrowserRouter>);
   };