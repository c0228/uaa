import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import WebRoutes from "@Pages/Web3.0/routes.js";
import SysDesignRoutes from "@Pages/SystemDesign/routes.js";
import DSARoutes from "@Pages/DSA/routes.js";
import NotFound from "@Pages/404NotFound/index.js";

const RouteLoader = () => {
  const Routes = {...WebRoutes, ...SysDesignRoutes, ...DSARoutes };
    const { industry, module, input1, input2 } = useParams();
  
    // Construct the route key dynamically
    const routeKey = [ industry, module, input1, input2 ].filter(Boolean).join('/');
  
    console.log("Route Key:", routeKey, "Routes:", Routes);
  
    const RouteComponent = Routes[routeKey]?.component; // || <div>Page Not Found</div>
  
    if (!RouteComponent) {
        return <NotFound />;
    }

    return <><RouteComponent meta={Routes[routeKey]} /></>;

};
  
export default RouteLoader;