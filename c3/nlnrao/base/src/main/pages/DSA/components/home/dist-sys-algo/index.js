import React from "react";
import { Card } from "e-ui-react";
import Terminologies from '@MainComponents/terminologies-list/index.js';
import DSARoutes from "@MainPages/DSA/routes.js";

const DistSysAlgo = () =>{
 return (<Terminologies title="Distributed Systems & Consensus Algorithms" 
    desc={<div>
    <div><u>Distributed systems</u> need consensus to maintain data consistency across nodes.</div>
    </div>}
    isIndex={true}
    prefix="tech/dsa/distributed-systems-consensus-algorithms/"
    data={DSARoutes} />);
};

export default DistSysAlgo;