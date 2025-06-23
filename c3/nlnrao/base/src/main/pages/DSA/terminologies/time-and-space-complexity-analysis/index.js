import React from "react";
import { Blog, Content, RightSide } from '@MainPages/DSA/components/blog-templates/index.js';
import CacheEvictionStrategies from "@MainPages/DSA/components/home/cache-eviction-strategies/index.js";
import Introduction from "./components/introduction/index.js";
import TimeComplexity from "./components/time-complexity/index.js";
import SpaceComplexity from "./components/space-complexity/index.js";

const TimeAndSpaceComplexityAnalysis = ({ meta }) =>{
 return (<div>
  <Blog metaData={meta}>
    <Content>
        <Introduction />
        <TimeComplexity />
        <SpaceComplexity />
    </Content>
    <RightSide>
        <CacheEvictionStrategies />
    </RightSide>
  </Blog>
 </div>);
};

export default TimeAndSpaceComplexityAnalysis;