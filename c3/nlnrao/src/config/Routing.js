import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
import Home from "@Pages/Home/index.js";
import GetQuotation from "@Pages/Blockchain/index.js";
import Products from "@Pages/SystemDesign/index.js";

export const AppRouting = ()=>{

    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Welcome/>} />
         <Route exact path="/home" element={<Home/>} />
         <Route exact path="/system-design/introduction" element={<Products />} />
         <Route exact path="/blockchain/introduction" element={<GetQuotation />} />
       </Routes>
    </BrowserRouter>);
   };