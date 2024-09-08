import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from "@Provider/AuthProvider.js";
import PERMISSIONS from "@Permissions/index.js";
import { Authenticated, Authorization } from "./Security.js";
import Welcome from "@Pages/Welcome/index.js";
import ShortlistForm from "@Pages/ShortlistForm/index.js";
import ShortlistRecords from "@Pages/ShortlistRecords/index.js";
import Authentication from "@Pages/Authentication/index.js";
import ManageEmployees from "@Pages/ManageEmployees/index.js";
import UploadData from "@Pages/UploadData/index.js";

export const AppRouting = ()=>{
  const isAuthenticated = Authenticated();
  return (<BrowserRouter basename="/">
    <AuthProvider>
      <Routes>
         <Route exact path="/" element={isAuthenticated?(<Navigate to="/consultancy/students-shortlist-form" />):(<Authentication />)} />
         <Route path='/consultancy' element={<Authorization permissions={[PERMISSIONS.CUSTOMER, PERMISSIONS.EMPLOYEE, PERMISSIONS.ADMINISTRATOR]} />}>
            <Route path='students-shortlist-form' element={<ShortlistForm />} />
          </Route>
          <Route path='/consultancy' element={<Authorization permissions={[PERMISSIONS.ADMINISTRATOR]} />}>
            <Route path='employees' element={<ManageEmployees />} />
            <Route path='upload-data' element={<UploadData />} />
            <Route path='students-shortlist-records' element={<ShortlistRecords />} />
          </Route>
       </Routes>
      </AuthProvider>
    </BrowserRouter>);
   };