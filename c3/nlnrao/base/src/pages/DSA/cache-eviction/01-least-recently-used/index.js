import React from "react";
import { Blog, Content, RightSide } from '@Pages/DSA/components/blog-templates/index.js';
import CacheEvictionStrategies from "@Pages/DSA/components/cache-eviction-strategies/index.js";

const LRUCache = ({ meta }) =>{
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

export default LRUCache;