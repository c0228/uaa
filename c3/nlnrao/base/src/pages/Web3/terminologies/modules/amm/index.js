import React from "react";
import { BlogTerminologies, Content, RightSide } from '@Components/blog-tmpl-terminologies/index.js';
import Introduction from "./components/introduction/index.js";
import Benefits from "./components/benefits/index.js";
import Conclusion from "./components/conclusion/index.js";

const AMM = ({ meta }) =>{
 return (<div className="mbot15p">
  <BlogTerminologies active="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
        <Introduction />
        <Benefits />
        <Conclusion />
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default AMM;