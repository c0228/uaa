import React from "react";
import { BlogTerminologies, Content, RightSide } from '@MainComponents/blog-tmpl-terminologies/index.js';
import Introduction from "./components/introduction/index.js";
import Timeline from "./components/timeline/index.js";
import Conclusion from "./components/conclusion/index.js";

const SolidityVsVyper = ({ meta }) =>{
 return (<div className="mbot15p">
  <BlogTerminologies activeId="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
      <Introduction />
      <Timeline />
      <Conclusion />
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default SolidityVsVyper;
