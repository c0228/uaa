import React from "react";
import { BlogTerminologies, Content, RightSide } from '@Components/blog-tmpl-terminologies/index.js';
import Definition from "./components/Definition/index.js";
import Importance from "./components/Importance/index.js";
import ABIStructure from "./components/Structure/index.js";
import HowItWorks from "./components/HowItWorks/index.js";
import EncodingStandards from "./components/EncodingStandards/index.js";
import SecurityConsiderations from "./components/SecurityConsiderations/index.js";
import UseCases from "./components/UseCases/index.js";
import ABIvsAPI from "./components/ABI-vs-API/index.js";
import Conclusion from "./components/Conclusion/index.js";

const ABI = ({ meta }) =>{

 return (<div className="mbot15p">
  <BlogTerminologies activeId="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
        <Definition />
        <Importance />
        <ABIStructure />
        <HowItWorks />
        <EncodingStandards />
        <SecurityConsiderations />
        <UseCases />
        <ABIvsAPI />
        <Conclusion />
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default ABI;