import Web3Routes from "./Web3/component.routes.json";
import { Web3ComponentMap } from "./Web3/component.map.js";
import AIMLRoutes from "./AIML/component.routes.json";
import { AIMLComponentMap } from "./AIML/component.map.js";

export const AllRoutes = {
    "breadcrumbs": { 
        ...Web3Routes.breadcrumbs,
        ...AIMLRoutes.breadcrumbs
    },
    "urls": { 
        ...Web3Routes.urls,
        ...AIMLRoutes.urls
    }
};

export const AllComponentMap = {
    ...Web3ComponentMap,
    ...AIMLComponentMap
};

