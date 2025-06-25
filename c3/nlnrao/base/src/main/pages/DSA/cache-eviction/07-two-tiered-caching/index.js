import React from "react";
import { Blog, Content, RightSide } from '@MainPages/DSA/components/blog-templates/index.js';
import CacheEvictionStrategies from "@MainPages/DSA/components/home/cache-eviction-strategies/index.js";
import Introduction from "./components/introduction/index.js";
import CacheImpl from "./components/cache-impl/index.js";
import Others from "./components/others/index.js";
import Conclusion from "./components/conclusion/index.js";

const TTCache = ({ meta }) =>{
 return (<div>
  <Blog metaData={meta}>
    <Content>
        <Introduction />
        <CacheImpl />
        <Others />
        <Conclusion />
    </Content>
    <RightSide>
        <CacheEvictionStrategies />
    </RightSide>
  </Blog>
 </div>);
};

export default TTCache;