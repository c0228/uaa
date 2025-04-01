import React from "react";
import { Blog, Content, RightSide } from '@MainPages/DSA/components/blog-templates/index.js';
import CacheEvictionStrategies from "@MainPages/DSA/components/home/cache-eviction-strategies/index.js";

const TTLCache = ({ meta }) =>{
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

export default TTLCache;