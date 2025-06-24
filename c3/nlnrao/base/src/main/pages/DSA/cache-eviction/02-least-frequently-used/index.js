import React from "react";
import { Blog, Content, RightSide } from '@MainPages/DSA/components/blog-templates/index.js';
import CacheEvictionStrategies from "@MainPages/DSA/components/home/cache-eviction-strategies/index.js";
import Introduction from "./components/introduction/index.js";

const LFUCache = ({ meta }) =>{
 return (<div>
  <Blog metaData={meta}>
    <Content>
        <Introduction />
    </Content>
    <RightSide>
        <CacheEvictionStrategies />
    </RightSide>
  </Blog>
 </div>);
};

export default LFUCache;