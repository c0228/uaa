// Web3
import Web3Routes from "@Pages/Web3/component.routes.json";
import JSRoutes from "@Pages/Javascript/component.routes.json";
import JavaRoutes from "@Pages/Java/component.routes.json";
import AgileRoutes from "@Pages/Agile/component.routes.json";
import { Web3ComponentMap } from "@Pages/Web3/component.map.js";
import { JSComponentMap } from "@Pages/Javascript/component.map.js";
import { JavaComponentMap } from "@Pages/Java/component.map.js";
import { AgileComponentMap } from "@Pages/Agile/component.map.js";

export const AllRoutes = {
    "breadcrumbs": { ...Web3Routes.breadcrumbs, ...JSRoutes.breadcrumbs, 
        ...JavaRoutes.breadcrumbs, ...AgileRoutes.breadcrumbs },
    "urls": { ...Web3Routes.urls, ...JSRoutes.urls, ...JavaRoutes.urls,  ...AgileRoutes.urls }
};

export const AllComponentMap = {
    ...Web3ComponentMap, ...JSComponentMap, ...JavaComponentMap, ...AgileComponentMap
};

