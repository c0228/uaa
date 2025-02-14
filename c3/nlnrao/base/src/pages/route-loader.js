import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import NotFound from "@Pages/404NotFound/index.js";
import Routes from "./routes.js";

const RouteLoader = () => {
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