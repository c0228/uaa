import React from "react";
import { Blog, Content, RightSide } from '@Pages/DSA/components/blog-templates/index.js';
import CacheEvictionStrategies from "@Pages/DSA/components/home/cache-eviction-strategies/index.js";

const TTCache = ({ meta }) =>{
 return (<div>
  <Blog metaData={meta}>
    <Content>
        Content
    </Content>
    <RightSide>
        <CacheEvictionStrategies />
    </RightSide>
  </Blog>
 </div>);
};

export default TTCache;