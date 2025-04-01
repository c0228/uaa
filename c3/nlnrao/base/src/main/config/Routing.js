import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "@Components/scroll-to-top/index.js"; 
import RouteLoader from "@Pages/route.loader.js";
import Home from "@Pages/Home/index.js";
/*
// import JSONCrudOperations from "@Pages/Javascript/content/json/crud-operations/index.js";
import DefineL1L2L3 from "@Pages/Agile/content/L1-L2-L3/index.js";
import ArchDesignPrinciple from "@Pages/Agile/content/arch-design-principle/index.js";
import DDDRole from "@Pages/Agile/content/ddd-role/index.js";
import V8Node from "@Pages/NodeJS/content/v8-node/index.js";
import ReactScroll01 from "@Pages/React/content/react-scroll-01/index.js";
import BufferClasses from "@Pages/NodeJS/content/buffer-classes/index.js";
import Frontend from "@Pages/Frontend/index.js";

import DSA from "@Pages/DSA/index.js";
import SystemDesign from "@Pages/SystemDesign/index.js";
import SDComponents from "@Pages/SystemDesign/content/01-sd-components";

import JSRoutes from "@Pages/Javascript/routes.js";
import JavaRoutes from "@Pages/Java/routes.js";
import Web3Routes from "@Pages/Web3.0/routes.js";

import RouteLoader from "@Pages/route-loader.js";
*/

export const AppRouting = ()=>{

    return (<BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path=":industry" element={<RouteLoader />} />
        <Route path=":industry/:module" element={<RouteLoader />} />
        <Route path=":industry/:module/:input1" element={<RouteLoader />} />
        <Route path=":industry/:module/:input1/:input2" element={<RouteLoader />} />

        {/*
         <Route exact path="/" element={<Home/>} />

         /* Javascript
         <Route path="tech/javascript/:input1" element={<JSRoutes />} />
         <Route path="tech/javascript/:input1/:input2" element={<JSRoutes />} />
         
         {/* Frontend
         <Route exact path="tech/frontend/overview" element={<Frontend />} />

         {/* Blockchain
         <Route path="tech/web3.0/:input1" element={<Web3Routes />} />
         <Route path="tech/web3.0/:input1/:input2" element={<Web3Routes />} />

        
         
         {/* Java 
         <Route path="tech/java/:input1/:input2" element={<JavaRoutes />} />
         
         {/* DSA 
         <Route path="tech/dsa/overview" element={<DSA />} />

         {/* System Design 
         <Route path="tech/system-design/overview" element={<SystemDesign />} />
         <Route path="tech/system-design/the-architect-toolkit-exploring-essential-components-of-system-design" element={<SDComponents />} />
         
         {/* Agile Methodology 
         <Route exact path="tech/agile-methodology/what-is-L1-L2-L3-tier-system-of-remote-it-support" element={<DefineL1L2L3 />} />
         <Route exact path="tech/agile-methodology/what-are-architecture-design-principles-and-how-does-agile-methodology-aligns-with-it" element={<ArchDesignPrinciple/>} />
         <Route exact path="tech/agile-methodology/what-is-the-role-of-domain-driven-design-ddd-in-agile-architecture-and-how-it-helps-in-defining-bounded-contexts-and-microservices" element={<DDDRole/>} />
      
         {/* NodeJS 
         <Route exact path="tech/node-js/overview-of-node-js-and-v8-engine-how-they-works-together" element={<V8Node />} />
         <Route exact path="tech/node-js/understanding-buffer-classes-in-node-js" element={<BufferClasses />} />

         {/* React 
         <Route exact path="tech/react/scroll-to-respective-section-on-a-page-when-a-link-is-clicked-from-other-page" element={<ReactScroll01 />} />
      */}
      </Routes>
    </BrowserRouter>);
   };