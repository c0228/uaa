import React from "react";
import Terminologies from '@Components/terminologies-list/index.js';
import { Blog, Content, RightSide } from '@Pages/Web3/components/blog-templates/index.js';
import Routes from "@Pages/Web3/component.routes.json";
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

 return (<div>
  <Blog metaData={meta}>
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
        <Terminologies prefix="tech/web3.0/terminologies/" data={Routes} />
    </RightSide>
  </Blog>
 </div>);
};

export default ABI;