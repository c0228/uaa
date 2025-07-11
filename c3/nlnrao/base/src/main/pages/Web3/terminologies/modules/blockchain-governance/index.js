import React from "react";
import { BlogTerminologies, Content, RightSide } from '@MainComponents/blog-tmpl-terminologies/index.js';
import Introduction from "./components/Introduction/index.js";
import Examples from "./components/Examples/index.js";
import Conclusion from "./components/Conclusion/index.js";

const BlockchainGovernance = ({ meta }) =>{

 return (<div className="mbot15p">
  <BlogTerminologies activeId="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
        <Introduction />
        <Examples />
        <Conclusion />
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default BlockchainGovernance;