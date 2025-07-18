import React from "react";
import { Blog, Content, RightSide } from '@MainPages/DSA/components/blog-templates/index.js';
import CacheEvictionStrategies from "@MainPages/DSA/components/home/cache-eviction-strategies/index.js";
import Introduction from './components/introduction/index.js';
import BigONotation from './components/big-o-notation/index.js';

const BigOmegaAndThetaNotations = ({ meta }) =>{
 return (<div>
  <Blog metaData={meta}>
    <Content>
        <Introduction />
        <BigONotation />
    </Content>
    <RightSide>
        <CacheEvictionStrategies />
    </RightSide>
  </Blog>
 </div>);
};

export default BigOmegaAndThetaNotations;