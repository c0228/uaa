import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import MyDashboard from "@Pages/MyDashboard/index.js";
import BrowseMatrimony from "@Pages/BrowseMatrimony/index.js";
import MatchCalculator from "@Pages/MatchCalculator/index.js";
import ProfileCreateNew from "@Pages/ProfileCreateNew/index.js";
import ProfileFullView from "@Pages/ProfileFullView/index.js";
import Authentication from "@Pages/Authentication/index.js";

export const AppRouting = ()=>{
 return (<BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/MyDashboard" element={<MyDashboard />} />
      <Route exact path="/BrowseMatrimony" element={<BrowseMatrimony />} />
      <Route exact path="/MatchCalculator" element={<MatchCalculator />} />
      <Route exact path="/CreateNewProfile" element={<ProfileCreateNew />} />
      <Route exact path="/Profile/:profileId" element={<ProfileFullView />} />
      <Route exact path="/User/Authentication" element={<Authentication />} />
      <Route exact path="/User/ChangePassword/:id" element={<Authentication />} />
    </Routes>
 </BrowserRouter>);
};