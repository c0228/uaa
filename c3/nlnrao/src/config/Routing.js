import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from "@Pages/Welcome/index.js";
import JSONCrudOperations from "@Pages/Javascript/content/json/crud-operations/index.js";
import GetQuotation from "@Pages/Blockchain/index.js";
import Products from "@Pages/SystemDesign/index.js";
import DefineL1L2L3 from "@Pages/Agile/content/L1-L2-L3/index.js";

export const AppRouting = ()=>{

    return (<BrowserRouter basename="/">
       <Routes>
         <Route exact path="/" element={<Welcome/>} />
         <Route exact path="/tech/overview" element={<Products />} />

         <Route exact path="/tech/javascript/dynamically-create-retrieve-update-and-delete-crud-operations-on-json-object-and-json-array" element={<JSONCrudOperations/>} />
         <Route exact path="/tech/javascript/sorting-an-element-in-json-array-in-ascending-and-descending-order" element={<JSONCrudOperations/>} />

         <Route exact path="/blockchain/introduction" element={<GetQuotation />} />

         <Route exact path="/tech/agile-methodology/what-is-L1-L2-L3-tier-system-of-remote-it-support" element={<DefineL1L2L3 />} />

       </Routes>
    </BrowserRouter>);
   };