// Web3
import CoreRoutes from "./Core/component.routes.json";
import { CoreComponentMap } from "./Core/component.map.js";
import AIMLRoutes from "./AIML/component.routes.json";
import { AIMLComponentMap } from "./AIML/component.map.js";
import DatabasesRoutes from "./Databases/component.routes.json";
import { DatabasesComponentMap } from "./Databases/component.map.js";
import Web3Routes from "./Web3/component.routes.json";
import { Web3ComponentMap } from "./Web3/component.map.js";
import JSRoutes from "./Javascript/component.routes.json";
import { JSComponentMap } from "./Javascript/component.map.js";
import NodeJSRoutes from "./NodeJS/component.routes.json";
import { NodeJSComponentMap } from "./NodeJS/component.map.js";
import PHPRoutes from "./PHP/component.routes.json";
import { PHPComponentMap } from "./PHP/component.map.js";
import PythonRoutes from "./Python/component.routes.json";
import { PythonComponentMap } from "./Python/component.map.js";
import JavaRoutes from "./Java/component.routes.json";
import { JavaComponentMap } from "./Java/component.map.js";
import AgileRoutes from "./Agile/component.routes.json";
import { AgileComponentMap } from "./Agile/component.map.js";
import DocKubRoutes from "./DocKub/component.routes.json";
import { DocKubComponentMap } from "./DocKub/component.map.js";
import KafkaRoutes from "./Kafka/component.routes.json";
import { KafkaComponentMap } from "./Kafka/component.map.js";
import NetworkingRoutes from "./Networking/component.routes.json";
import { NetworkingComponentMap } from "./Networking/component.map.js";
import SystemDesignRoutes from "./SystemDesign/component.routes.json";
import { SystemDesignComponentMap } from "./SystemDesign/component.map.js";
import DSARoutes from "./DSA/component.routes.json";
import { DSAComponentMap } from "./DSA/component.map.js";
import FrontendRoutes from "./Frontend/component.routes.json";
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
    "urls": { ...CoreRoutes.urls,
            ...AIMLRoutes.urls,
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
    ...CoreComponentMap,
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

