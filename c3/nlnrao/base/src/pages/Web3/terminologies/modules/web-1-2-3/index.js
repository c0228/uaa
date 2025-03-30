import React from "react";
import { BlogTerminologies, Content, RightSide } from '@Components/blog-tmpl-terminologies/index.js';
import HglBgHeader5 from "@Components/hgl-bg-header5/index.js";
import Introduction from "./content/introduction/index.js";
import Compare from "./content/compare/index.js";
import Conclusion from "./content/conclusion/index.js";

const Web123 = ({ meta }) =>{
 return (<div>
  <BlogTerminologies active="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
        <Introduction />
        <Compare />
        <Conclusion />
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default Web123;