// Web3
import AIMLRoutes from "./AIML/component.routes.json";
import DatabasesRoutes from "./Databases/component.routes.json";
import Web3Routes from "./Web3/component.routes.json";
import JSRoutes from "./Javascript/component.routes.json";
import NodeJSRoutes from "./NodeJS/component.routes.json";
import PHPRoutes from "./PHP/component.routes.json";
import PythonRoutes from "./Python/component.routes.json";
import JavaRoutes from "./Java/component.routes.json";
import AgileRoutes from "./Agile/component.routes.json";
import DocKubRoutes from "./DocKub/component.routes.json";
import KafkaRoutes from "./Kafka/component.routes.json";
import NetworkingRoutes from "./Networking/component.routes.json";
import SystemDesignRoutes from "./SystemDesign/component.routes.json";
import DSARoutes from "./DSA/component.routes.json";
import FrontendRoutes from "./Frontend/component.routes.json";
import { AIMLComponentMap } from "./AIML/component.map.js";
import { DatabasesComponentMap } from "./Databases/component.map.js";
import { Web3ComponentMap } from "./Web3/component.map.js";
import { JSComponentMap } from "./Javascript/component.map.js";
import { NodeJSComponentMap } from "./NodeJS/component.map.js";
import { PHPComponentMap } from "./PHP/component.map.js";
import { PythonComponentMap } from "./Python/component.map.js";
import { JavaComponentMap } from "./Java/component.map.js";
import { AgileComponentMap } from "./Agile/component.map.js";
import { DocKubComponentMap } from "./DocKub/component.map.js";
import { KafkaComponentMap } from "./Kafka/component.map.js";
import { NetworkingComponentMap } from "./Networking/component.map.js";
import { SystemDesignComponentMap } from "./SystemDesign/component.map.js";
import { DSAComponentMap } from "./DSA/component.map.js";
import { FrontendComponentMap } from "./Frontend/component.map.js";

export const AllRoutes = {
    "breadcrumbs": { ...AIMLRoutes.breadcrumbs,
                    ...DatabasesRoutes.breadcrumbs,
                    ...Web3Routes.breadcrumbs, 
                    ...JSRoutes.breadcrumbs, 
                    ...NodeJSRoutes.breadcrumbs, 
                    ...PHPRoutes.breadcrumbs,
                    ...PythonRoutes.breadcrumbs,
                    ...JavaRoutes.breadcrumbs, 
                    ...AgileRoutes.breadcrumbs,
                    ...DocKubRoutes.breadcrumbs,
                    ...KafkaRoutes.breadcrumbs,
                    ...NetworkingRoutes.breadcrumbs,
                    ...SystemDesignRoutes.breadcrumbs,
                    ...DSARoutes.breadcrumbs,
                    ...FrontendRoutes.breadcrumbs
                },
    "urls": { ...AIMLRoutes.urls,
            ...DatabasesRoutes.urls,
            ...Web3Routes.urls, 
            ...JSRoutes.urls, 
            ...NodeJSRoutes.urls, 
            ...PHPRoutes.urls,
            ...PythonRoutes.urls,
            ...JavaRoutes.urls,  
            ...AgileRoutes.urls,
            ...DocKubRoutes.urls,
            ...KafkaRoutes.urls,
            ...NetworkingRoutes.urls,
            ...SystemDesignRoutes.urls,
            ...DSARoutes.urls,
            ...FrontendRoutes.urls
        }
};

export const AllComponentMap = {
    ...AIMLComponentMap,
    ...DatabasesComponentMap,
    ...Web3ComponentMap, 
    ...JSComponentMap, 
    ...NodeJSComponentMap, 
    ...PHPComponentMap,
    ...PythonComponentMap,
    ...JavaComponentMap, 
    ...AgileComponentMap,
    ...DocKubComponentMap,
    ...KafkaComponentMap,
    ...NetworkingComponentMap,
    ...SystemDesignComponentMap,
    ...DSAComponentMap,
    ...FrontendComponentMap
};

