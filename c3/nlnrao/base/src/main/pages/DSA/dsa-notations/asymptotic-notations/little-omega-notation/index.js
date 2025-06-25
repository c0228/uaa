import React from "react";
import { Blog, Content, RightSide } from '@MainPages/DSA/components/blog-templates/index.js';
import DSANotations from '@MainPages/DSA/components/home/dsa-notations/index.js';
import CacheEvictionStrategies from "@MainPages/DSA/components/home/cache-eviction-strategies/index.js";
import Introduction from "./components/introduction/index.js";
import Example from "./components/example/index.js";
import Conclusion from "./components/conclusion/index.js";

const LittleOmegaNotation = ({ meta }) =>{
 return (<div>
  <Blog metaData={meta}>
    <Content>
        <Introduction />
        <Example />
        <Conclusion />
    </Content>
    <RightSide>
        <DSANotations />
        <CacheEvictionStrategies />
    </RightSide>
  </Blog>
 </div>);
};

export default LittleOmegaNotation;