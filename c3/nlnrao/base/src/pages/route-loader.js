import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import NotFound from "@Pages/404NotFound/index.js";
import Routes from "./Web3/component.routes.json";
import { ComponentMap } from "./Web3/component.map.js";

const RouteLoader = () => {
    const { industry, module, input1, input2 } = useParams();
  
    // Construct the route key dynamically
    const routeKey = [ industry, module, input1, input2 ].filter(Boolean).join('/');
  
    const RouteComponent = ComponentMap[Routes?.urls?.[routeKey]?.component]; // || <div>Page Not Found</div>
  
    console.log(RouteComponent);
    if (!RouteComponent) {
        return <NotFound />;
    }

    let meta = Routes?.urls?.[routeKey];
    meta["breadCrumbRoute"] = Routes?.breadcrumbs?.[meta.breadcrumbIndex];

    return <><RouteComponent meta={meta} /></>;

};
  
export default RouteLoader;