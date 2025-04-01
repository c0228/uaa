import React from "react";
import { BlogTerminologies, Content, RightSide } from '@MainComponents/blog-tmpl-terminologies/index.js';
import Introduction from "./components/introduction/index.js";
import InDetail from "./components/indetail/index.js";
import Conclusion from "./components/conclusion/index.js";

const BlockchainDeploymentLifecycle = ({ meta }) =>{
 return (<div className="mbot15p">
  <BlogTerminologies activeId="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
        <Introduction />
        <InDetail />
        <Conclusion />
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default BlockchainDeploymentLifecycle;