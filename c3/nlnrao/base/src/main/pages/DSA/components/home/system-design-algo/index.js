import React from "react";
import { Card } from "e-ui-react";
import Terminologies from '@MainComponents/terminologies-list/index.js';
import Routes from "@MainPages/DSA/component.routes.json";

const SystemDesignAlgo = () =>{
 return (<Terminologies title="System design Algorithms" 
    desc={<div>System design involves creating scalable, fault-tolerant, and efficient architectures 
        for large-scale applications.</div>}
    isIndex={true}
    prefix="tech/dsa/system-design-algorithms/"
    data={Routes?.urls} />);
};

export default SystemDesignAlgo;