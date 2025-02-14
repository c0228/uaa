import React from "react";
// import WebRoutes from "@Pages/Web3/routes.js";
import SysDesignRoutes from "@Pages/SystemDesign/routes.js";
import DSARoutes from "@Pages/DSA/routes.js";

const Routes = { ...SysDesignRoutes, ...DSARoutes };
console.log("Routes: ", Routes);

export default Routes;
