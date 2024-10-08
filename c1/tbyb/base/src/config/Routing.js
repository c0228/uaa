import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import Products from "@Pages/Products/index.js";
import Specials from "@Pages/Specials/index.js";
import Events from "@Pages/Events/index.js";
import FoodTrucks from "@Pages/FoodTrucks/index.js";

export const AppRouting = ()=>{
    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="/food-and-beverages" element={<Products />} />
         <Route exact path="/specials" element={<Specials />} />
         <Route exact path="/events" element={<Events />} />
         <Route exact path="/food-trucks" element={<FoodTrucks />} />
       </Routes>
    </BrowserRouter>);
   };