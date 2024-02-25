import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
import Home from "@Pages/Home/index.js";
import Services from "@Pages/Services/index.js"
import AboutUs from "@Pages/AboutUs/index.js"
import BlogsArticles from "@Pages/BlogsArticles/index.js"
import Newsletters from "@Pages/Newsletters/index.js"
import ApplicationProcess from "@Pages/ApplicationProcess/index.js"

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Welcome/>} />
         <Route exact path="/home" element={<Home/>} />
         <Route exact path="/services" element={<Services />} />
         <Route exact path="/aboutUs" element={<AboutUs />} />
         <Route exact path="/blogsArticles" element={<BlogsArticles />} />
         <Route exact path="/newsletters" element={<Newsletters />} />
         <Route exact path="/applicationProcess" element={<ApplicationProcess />} />
       </Routes>
    </BrowserRouter>);
   };