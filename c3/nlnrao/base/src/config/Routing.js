import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "@Pages/Home/index.js";
import JSONCrudOperations from "@Pages/Javascript/content/json/crud-operations/index.js";
import GetQuotation from "@Pages/Blockchain/index.js";
import Products from "@Pages/SystemDesign/index.js";
import DefineL1L2L3 from "@Pages/Agile/content/L1-L2-L3/index.js";
import ArchDesignPrinciple from "@Pages/Agile/content/arch-design-principle/index.js";
import DDDRole from "@Pages/Agile/content/ddd-role/index.js";
import V8Node from "@Pages/NodeJS/content/v8-node/index.js";
import ReactScroll01 from "@Pages/React/content/react-scroll-01/index.js";
import BufferClasses from "@Pages/NodeJS/content/buffer-classes/index.js";

export const AppRouting = ()=>{

    return (<BrowserRouter basename="/">
      <Routes>
         <Route exact path="/" element={<Home/>} />
         <Route exact path="tech/overview" element={<Products />} />

         <Route exact path="tech/javascript/dynamically-create-retrieve-update-and-delete-crud-operations-on-json-object-and-json-array" element={<JSONCrudOperations/>} />
         <Route exact path="tech/javascript/sorting-an-element-in-json-array-in-ascending-and-descending-order" element={<JSONCrudOperations/>} />

         <Route exact path="blockchain/introduction" element={<GetQuotation />} />

         {/* Agile Methodology */}
         <Route exact path="tech/agile-methodology/what-is-L1-L2-L3-tier-system-of-remote-it-support" element={<DefineL1L2L3 />} />
         <Route exact path="tech/agile-methodology/what-are-architecture-design-principles-and-how-does-agile-methodology-aligns-with-it" element={<ArchDesignPrinciple/>} />
         <Route exact path="tech/agile-methodology/what-is-the-role-of-domain-driven-design-ddd-in-agile-architecture-and-how-it-helps-in-defining-bounded-contexts-and-microservices" element={<DDDRole/>} />
      
         {/* NodeJS */}
         <Route exact path="tech/node-js/overview-of-node-js-and-v8-engine-how-they-works-together" element={<V8Node />} />
         <Route exact path="tech/node-js/understanding-buffer-classes-in-node-js" element={<BufferClasses />} />

         {/* React */}
         <Route exact path="tech/react/scroll-to-respective-section-on-a-page-when-a-link-is-clicked-from-other-page" element={<ReactScroll01 />} />
      </Routes>
    </BrowserRouter>);
   };