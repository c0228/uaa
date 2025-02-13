import React from "react";
import { Card } from "e-ui-react";
import Terminologies from '@Components/terminologies-list/index.js';
import DSARoutes from "@Pages/DSA/routes.js";

const CacheEvictionStrategies = () =>{
 return (<Terminologies title="Cache Eviction Strategies" 
    desc={<div>
    <div><u>Cache Eviction Strategies</u> determine how a cache removes old or less useful data 
    when it reaches its storage limit.</div>
    <Card padding={5} backgroundColor="#eee">
        <div style={{ paddingLeft:'15px', marginTop:'15px' }}>No single strategy is perfect—the right choice depends on:</div>
        <ul>
            <li>Data access patterns (frequent reads? high writes?)</li>
            <li>System constraints (memory, CPU, disk space)</li>
            <li>Performance trade-offs (latency vs accuracy)</li>
        </ul>
    </Card>
    </div>}
    isIndex={true}
    prefix="tech/dsa/cache-eviction-strategies/"
    data={DSARoutes} />);
};

export default CacheEvictionStrategies;