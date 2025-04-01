import React from "react";
import { Card } from "e-ui-react";
import Terminologies from '@MainComponents/terminologies-list/index.js';
import DSARoutes from "@MainPages/DSA/routes.js";

const SystemDesignAlgo = () =>{
 return (<Terminologies title="System design Algorithms" 
    desc={<div>System design involves creating scalable, fault-tolerant, and efficient architectures 
        for large-scale applications.</div>}
    isIndex={true}
    prefix="tech/dsa/system-design-algorithms/"
    data={DSARoutes} />);
};

export default SystemDesignAlgo;