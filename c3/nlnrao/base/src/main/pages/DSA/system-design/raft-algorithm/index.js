import React from "react";
import { useLocation } from "react-router-dom";
import { Blog, Content, RightSide } from '@MainPages/DSA/components/blog-templates/index.js';
import DistSysAlgo from "@MainPages/DSA/components/home/dist-sys-algo/index.js";
import DSANotations from '@MainPages/DSA/components/home/dsa-notations/index.js';
import CacheEvictionStrategies from "@MainPages/DSA/components/home/cache-eviction-strategies/index.js";
import DSATerminologies from "@MainPages/DSA/components/home/terminologies/index.js";
import SystemDesignAlgo from "@MainPages/DSA/components/home/system-design-algo/index.js";
import LoadBalancingAlgorithms from "@MainPages/DSA/components/home/load-balance-algo/index.js";

import Introduction from "./components/introduction/index.js";
import Example from "./components/example/index.js";
import Conclusion from "./components/conclusion/index.js";

const RaftAlgorithm = ({ meta }) =>{
 const location = useLocation();
 const segments = location.pathname.split("/");
 return (<div>
  <Blog metaData={meta}>
    <Content>
      <Introduction />
      <Example />
      <Conclusion />
    </Content>
    <RightSide>
        {segments[3]==='distributed-systems-consensus-algorithms' && (<div>
          <DistSysAlgo />
          <DSANotations />
          <CacheEvictionStrategies />
          <SystemDesignAlgo />
        </div>)}
        {segments[3]==='system-design-algorithms' && (<div>
          <SystemDesignAlgo />
          <DSANotations />
          <CacheEvictionStrategies />
          <DistSysAlgo />
        </div>)}
    </RightSide>
  </Blog>
 </div>);
};

export default RaftAlgorithm;