import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
import ShortlistForm from "@Pages/ShortlistForm/index.js";
import Authentication from "@Pages/Authentication/index.js";
import ManageEmployees from "@Pages/ManageEmployees/index.js";
import { AuthProvider } from "@Provider/AuthProvider.js";
import PERMISSIONS from "@Permissions/index.js";
import { Authenticated, Authorization } from "./Security.js";

export const AppRouting = ()=>{
  const isAuthenticated = Authenticated();
  return (<BrowserRouter basename="/">
    <AuthProvider>
      <Routes>
         <Route exact path="/" element={isAuthenticated?(<Navigate to="/consultancy/my-dashboard" />):(<Authentication />)} />
         <Route path='/consultancy' element={<Authorization permissions={[PERMISSIONS.CUSTOMER]} />}>
            <Route path='students-shortlist-form' element={<ShortlistForm />} />
          </Route>
          <Route path='/consultancy' element={<Authorization permissions={[PERMISSIONS.CUSTOMER]} />}>
            <Route path='employees' element={<ManageEmployees />} />
          </Route>
       </Routes>
      </AuthProvider>
    </BrowserRouter>);
   };