import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
import ShortlistForm from "@Pages/ShortlistForm/index.js";
import Menu from "@Pages/Menu/index.js";
import Authentication from "@Pages/Authentication/index.js";
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
            <Route path='shortlist-form' element={<ShortlistForm />} />
          </Route>
          <Route path='/consultancy' element={<Authorization permissions={[PERMISSIONS.ADMINISTRATOR]} />}>
            <Route path='employees' element={<ShortlistForm />} />
          </Route>
         <Route exact path="/App/Authentication" element={<Authentication />} />
         <Route exact path="/App/ChangePassword/:id" element={<Authentication />} />
         <Route exact path="/App/Home" element={<ShortlistForm/>} />
         <Route exact path="/App/Menu" element={<Menu />} />
       </Routes>
      </AuthProvider>
    </BrowserRouter>);
   };