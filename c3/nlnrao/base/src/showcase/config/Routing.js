import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "@MainComponents/scroll-to-top/index.js";
import Web3Blockchain from "@ShowcasePages/Web3/index.js";
import RouteLoader from "@ShowcasePages/route.loader.js";

export const AppRouting = ()=>{

    return (<BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Web3Blockchain />} />
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