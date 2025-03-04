import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import AboutUs from "@Pages/AboutUs/index.js";
import Services from "@Pages/Services/index.js";
import FutureProjects from "@Pages/FutureProjects/index.js";
import ContactUs from "@Pages/ContactUs/index.js";

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/home" element={<Home/>} />
         <Route exact path="/about-us" element={<AboutUs />} />
         <Route exact path="/services" element={<Services />} />
         <Route exact path="/future-projects" element={<FutureProjects />} />
         <Route exact path="/contact-us" element={<ContactUs />} />
       </Routes>
    </BrowserRouter>);
   };