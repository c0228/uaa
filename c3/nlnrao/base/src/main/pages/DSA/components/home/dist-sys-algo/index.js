import React from "react";
import { Card } from "e-ui-react";
import Terminologies from '@MainComponents/terminologies-list/index.js';
import Routes from "@MainPages/DSA/component.routes.json";

const DistSysAlgo = () =>{
 return (<Terminologies title="Distributed Systems & Consensus Algorithms" 
    desc={<div>
    <div><u>Distributed systems</u> need consensus to maintain data consistency across nodes.</div>
    </div>}
    isIndex={true}
    prefix="tech/dsa/distributed-systems-consensus-algorithms/"
    data={Routes?.urls} />);
};

export default DistSysAlgo;