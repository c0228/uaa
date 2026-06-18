import React from "react";
import { getAppContext } from "e-ui-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "@Pages/Dashboard/index.js";

import Welcome from "@Pages/Welcome/index.js";
import Home from "@Pages/Home/index.js";
import AboutUPSC from "@Pages/AboutUPSC/index.js";
import DCASearchByCategories from "@Pages/CurrentAffairs/components/searchby-categories/index.js";
import DCASearchByTextDate from "@Pages/CurrentAffairs/components/searchby-textdate/index.js";
import Menu from "@Pages/Menu/index.js";
import NichesManager from "@Pages/NichesManager/index.js";
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

         <Route exact path="/dashboard" element={<Dashboard />} />
         <Route exact path="/manage/niches/categories" element={<NichesManager />} />
         <Route exact path="/manage/niches/sub-categories" element={<NichesManager />} />

         <Route exact path="/:lang/home" element={<Home/>} />
         <Route exact path="/:lang/about-upsc-examination" element={<AboutUPSC />} />
         <Route exact path="/:lang/daily-current-affairs/search/:slugText" element={<DCASearchByTextDate />} />
         <Route exact path="/:lang/daily-current-affairs/search/:slugText/:slugDate" element={<DCASearchByTextDate />} />
         <Route exact path="/:lang/daily-current-affairs/date/:slugDate" element={<DCASearchByTextDate />} />
         <Route exact path="/:lang/daily-current-affairs/list/:slugCategory/:slugSubCategory" element={<DCASearchByCategories />} />
       </Routes>
      </AuthProvider>
    </BrowserRouter>);
   };