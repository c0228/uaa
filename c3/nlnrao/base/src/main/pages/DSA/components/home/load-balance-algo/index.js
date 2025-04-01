import React from "react";
import { Card } from "e-ui-react";
import Terminologies from '@MainComponents/terminologies-list/index.js';
import DSARoutes from "@MainPages/DSA/routes.js";

const LoadBalancingAlgorithms = () =>{
 return (<div>
 <Terminologies title="Load Balancing Algorithms" 
    desc={<div>
    <div className="mbot15p"><u>Load Balancing Algorithms</u> distribute incoming network traffic across multiple 
    servers to ensure high availability, scalability, and fault tolerance. These algorithms can be broadly classified 
    into static and dynamic methods.</div>
    <div align="center" style={{ fontSize:'14px'}}><b>Static Load Balancing Algorithms<br/> (Predefined Distribution)</b></div>
    </div>}
    isIndex={true}
    prefix="tech/dsa/static-load-balancing-algorithms/"
    data={DSARoutes} />
 <Terminologies 
    desc={<div align="center" style={{ fontSize:'14px'}}><b>Dynamic Load Balancing Algorithms<br/> (Real-time Adjustments)</b></div>}
    isIndex={true}
    prefix="tech/dsa/dynamic-load-balancing-algorithms/"
    data={DSARoutes} />
</div>);
};

export default LoadBalancingAlgorithms;