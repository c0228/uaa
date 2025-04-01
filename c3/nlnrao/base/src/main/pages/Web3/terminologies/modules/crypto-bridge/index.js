import React from "react";
import { BlogTerminologies, Content, RightSide } from '@Components/blog-tmpl-terminologies/index.js';
import Introduction from "./components/introduction/index.js";
import InDetail from "./components/indetails/index.js";
import Conclusion from "./components/conclusion/index.js";

const CryptoBridge = ({ meta }) =>{
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

export default CryptoBridge;
