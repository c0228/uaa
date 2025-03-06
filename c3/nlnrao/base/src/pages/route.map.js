// Web3
import Web3Routes from "@Pages/Web3/component.routes.json";
import JSRoutes from "@Pages/Javascript/component.routes.json";
import NodeJSRoutes from "@Pages/NodeJS/component.routes.json";
import JavaRoutes from "@Pages/Java/component.routes.json";
import AgileRoutes from "@Pages/Agile/component.routes.json";
import DocKubRoutes from "@Pages/DocKub/component.routes.json";
import KafkaRoutes from "@Pages/Kafka/component.routes.json";
import SystemDesignRoutes from "@Pages/SystemDesign/component.routes.json";
import DSARoutes from "@Pages/DSA/component.routes.json";
import FrontendRoutes from "@Pages/Frontend/component.routes.json";
import { Web3ComponentMap } from "@Pages/Web3/component.map.js";
import { JSComponentMap } from "@Pages/Javascript/component.map.js";
import { NodeJSComponentMap } from "@Pages/NodeJS/component.map.js";
import { JavaComponentMap } from "@Pages/Java/component.map.js";
import { AgileComponentMap } from "@Pages/Agile/component.map.js";
import { DocKubComponentMap } from "@Pages/DocKub/component.map.js";
import { KafkaComponentMap } from "@Pages/Kafka/component.map.js";
import { SystemDesignComponentMap } from "@Pages/SystemDesign/component.map.js";
import { DSAComponentMap } from "@Pages/DSA/component.map.js";
import { FrontendComponentMap } from "@Pages/Frontend/component.map.js";

export const AllRoutes = {
    "breadcrumbs": { ...Web3Routes.breadcrumbs, 
                    ...JSRoutes.breadcrumbs, 
                    ...NodeJSRoutes.breadcrumbs, 
                    ...JavaRoutes.breadcrumbs, 
                    ...AgileRoutes.breadcrumbs,
                    ...DocKubRoutes.breadcrumbs,
                    ...KafkaRoutes.breadcrumbs,
                    ...SystemDesignRoutes.breadcrumbs,
                    ...DSARoutes.breadcrumbs,
                    ...FrontendRoutes.breadcrumbs
                },
    "urls": { ...Web3Routes.urls, 
            ...JSRoutes.urls, 
            ...NodeJSRoutes.urls, 
            ...JavaRoutes.urls,  
            ...AgileRoutes.urls,
            ...DocKubRoutes.urls,
            ...KafkaRoutes.urls,
            ...SystemDesignRoutes.urls,
            ...DSARoutes.urls,
            ...FrontendRoutes.urls
        }
};

export const AllComponentMap = {
    ...Web3ComponentMap, 
    ...JSComponentMap, 
    ...NodeJSComponentMap, 
    ...JavaComponentMap, 
    ...AgileComponentMap,
    ...DocKubComponentMap,
    ...KafkaComponentMap,
    ...SystemDesignComponentMap,
    ...DSAComponentMap,
    ...FrontendComponentMap
};

