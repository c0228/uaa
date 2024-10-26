import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from "@Provider/AuthProvider.js";
import PERMISSIONS from "@Permissions/index.js";
import { Authenticated, Authorization } from "./Security.js";
import Welcome from "@Pages/Welcome/index.js";
import Universities from "@Pages/Universities/index.js";
import ShortlistForm from "@Pages/ShortlistForm/index.js";
import ShortlistView from "@Pages/ShortlistView/index.js";
import ShortlistRecords from "@Pages/ShortlistRecords/index.js";
import Authentication from "@Pages/Authentication/index.js";
import ManageEmployees from "@Pages/ManageEmployees/index.js";
import UploadData from "@Pages/UploadData/index.js";

import MyProfile from "@Pages/MyProfile/index.js";
import ManageCompany from "@Pages/ManageCompany/index.js";
import ManageJobs from "@Pages/ManageJobs/index.js";
import ManageBlogs from "@Pages/ManageBlogs/index.js";

export const AppRouting = ()=>{
  const isAuthenticated = Authenticated();
  return (<BrowserRouter basename="/">
    <AuthProvider>
      <Routes>
         <Route exact path="/" element={isAuthenticated?(<Navigate to="/consultancy/students-shortlist-form" />):(<Authentication />)} />
          <Route path='/portal' element={<Authorization permissions={[PERMISSIONS.ADMINISTRATOR]} />}>
            <Route path='manage-companies' element={<ManageCompany />} />
            <Route path='manage-jobs' element={<ManageJobs />} />
            <Route path='manage-blogs' element={<ManageBlogs />} />
            <Route path='my-profile' element={<MyProfile />}  />
            <Route path='upload-data' element={<UploadData />} />
          </Route>
       </Routes>
      </AuthProvider>
    </BrowserRouter>);
   };