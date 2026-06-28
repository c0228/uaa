import React, { useEffect } from "react";
import { getAppContext } from "e-ui-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from "@UserPages/Dashboard/index.js";
import Categories from "@AdminPages/NicheManager/categories/index.js";
import SubCategories from "@AdminPages/NicheManager/subcategories/index.js";
import CacheManager from "@AdminPages/AppConfigSettings/cache-manager/index.js";

import Welcome from "@UserPages/Welcome/index.js";
import Home from "@UserPages/Home/index.js";
import AboutUPSC from "@UserPages/AboutUPSC/index.js";
import DiscussionHub from "@UserPages/DiscussionHub/index.js";
import DCASearchByCategories from "@UserPages/CurrentAffairs/components/searchby-categories/index.js";
import DCASearchByTextDate from "@UserPages/CurrentAffairs/components/searchby-textdate/index.js";
import Menu from "@UserPages/Menu/index.js";
import NichesManager from "@UserPages/NichesManager/index.js";
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

         {/** Admin Pages */}
         <Route exact path="/manage/niches/categories" element={<Categories />} />
         <Route exact path="/manage/niches/subcategories" element={<SubCategories />} />
         <Route exact path="/app/config/manage/cache" element={<CacheManager />} />
         


         <Route exact path="/:lang/home" element={<Home/>} />
         <Route exact path="/:lang/about-upsc-examination" element={<AboutUPSC />} />
         <Route exact path="/:lang/daily-current-affairs/search/:slugText" element={<DCASearchByTextDate />} />
         <Route exact path="/:lang/daily-current-affairs/search/:slugText/:slugDate" element={<DCASearchByTextDate />} />
         <Route exact path="/:lang/daily-current-affairs/date/:slugDate" element={<DCASearchByTextDate />} />
         <Route exact path="/:lang/daily-current-affairs/list/:slugCategory/:slugSubCategory" element={<DCASearchByCategories />} />
         <Route exact path="/:lang/upsc-open-chat-discussion-hub" element={<DiscussionHub />} />
         <Route exact path="/:lang/my-dashboard" element={<Dashboard />} />

       </Routes>
      </AuthProvider>
    </BrowserRouter>);
   };