import React from "react";
import { Blog, Content, RightSide } from '@MainPages/DSA/components/blog-templates/index.js';
import DistSysAlgo from "@MainPages/DSA/components/home/dist-sys-algo/index.js";
import DSANotations from '@MainPages/DSA/components/home/dsa-notations/index.js';
import CacheEvictionStrategies from "@MainPages/DSA/components/home/cache-eviction-strategies/index.js";


const PaxosAlgorithm = ({ meta }) =>{
 return (<div>
  <Blog metaData={meta}>
    <Content>
        Content
    </Content>
    <RightSide>
        <DistSysAlgo />
        <DSANotations />
        <CacheEvictionStrategies />
    </RightSide>
  </Blog>
 </div>);
};

export default PaxosAlgorithm;