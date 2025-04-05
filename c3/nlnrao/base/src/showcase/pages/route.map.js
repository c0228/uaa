import Web3Routes from "./Web3/component.routes.json";
import { Web3ComponentMap } from "./Web3/component.map.js";

export const AllRoutes = {
    "breadcrumbs": { 
        ...Web3Routes.breadcrumbs
    },
    "urls": { 
        ...Web3Routes.urls
    }
};

export const AllComponentMap = {
    ...Web3ComponentMap
};

