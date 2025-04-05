import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import NotFound from "@MainPages/404NotFound/index.js";
import { AllRoutes, AllComponentMap } from './route.map.js';

const RouteLoader = () => {
    const { industry, module, input1, input2 } = useParams();
  
    // Construct the route key dynamically
    const routeKey = [ industry, module, input1, input2 ].filter(Boolean).join('/');
  
    const RouteComponent = AllComponentMap[AllRoutes?.urls?.[routeKey]?.component]; // || <div>Page Not Found</div>
  
    console.log(AllRoutes, routeKey, RouteComponent);
    if (!RouteComponent) {
        return <NotFound />;
    }

    let meta = AllRoutes?.urls?.[routeKey];
    meta["breadCrumbRoute"] = AllRoutes?.breadcrumbs?.[meta.breadcrumbIndex];

    return <><RouteComponent meta={meta} /></>;

};
  
export default RouteLoader;