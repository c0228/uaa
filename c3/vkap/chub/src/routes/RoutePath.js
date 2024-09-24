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

export const AppRouting = ()=>{
  const isAuthenticated = Authenticated();
  return (<BrowserRouter basename="/">
    <AuthProvider>
      <Routes>
         <Route exact path="/" element={isAuthenticated?(<Navigate to="/consultancy/students-shortlist-form" />):(<Authentication />)} />
         <Route path='/consultancy' element={<Authorization permissions={[PERMISSIONS.CUSTOMER, PERMISSIONS.EMPLOYEE, PERMISSIONS.ADMINISTRATOR]} />}>
            <Route path='view-universities' element={<Universities />} />
            <Route path='students-shortlist-form' element={<ShortlistForm />} />
            <Route path='students-shortlist-view/:id' element={<ShortlistView />} />
            <Route path='my-profile' element={<MyProfile />} />
          </Route>
          <Route path='/consultancy' element={<Authorization permissions={[PERMISSIONS.EMPLOYEE, PERMISSIONS.ADMINISTRATOR]} />}>
            <Route path='students-shortlist-records' element={<ShortlistRecords />} />
          </Route>
          <Route path='/consultancy' element={<Authorization permissions={[PERMISSIONS.ADMINISTRATOR]} />}>
            <Route path='employees' element={<ManageEmployees />} />
            <Route path='upload-data' element={<UploadData />} />
          </Route>
       </Routes>
      </AuthProvider>
    </BrowserRouter>);
   };