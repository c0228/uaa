import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
// import Home from "@Pages/Home/index.js";
import AboutUs from "@Pages/AboutUs/index.js";
import Services from "@Pages/Services/index.js";
import JobSeekers from "@Pages/JobSeekers/index.js";
import JobDetails from "@Pages/JobDetails/index.js";
import Blogs from "@Pages/Blogs/index.js";

export const AppRouting = ()=>{
  return (<BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" element={<Welcome/>} />
      <Route exact path="/home" element={<Welcome/>} />
      <Route exact path="/about-us" element={<AboutUs />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/job-seekers" element={<JobSeekers />} />
      <Route exact path="/job-details" element={<JobDetails />} />
      <Route exact path="/blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>);
};
