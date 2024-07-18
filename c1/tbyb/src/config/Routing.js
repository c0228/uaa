import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import Products from "@Pages/Products/index.js";

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/food-and-beverages" element={<Products />} />
       </Routes>
    </BrowserRouter>);
   };