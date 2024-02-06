import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Universities from "@Pages/Universities/index.js";
import FindUniversities from "@Pages/FindUniversities/index.js";
import Home from "@Pages/Home/index.js";
import Students from "@Pages/Students/index.js";
import Welcome from "@Pages/Welcome/index.js";

export const AppRouting = ()=>{
 return (<BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" element={<Welcome/>} />
      <Route exact path="/universities" element={<Universities/>} />
      <Route exact path="/find-Universities" element={<FindUniversities />} />
      <Route exact path="/students-shortlist" element={<Students />} />
    </Routes>
 </BrowserRouter>);
};
