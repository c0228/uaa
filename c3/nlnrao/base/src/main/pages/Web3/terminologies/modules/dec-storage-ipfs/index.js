import React from "react";
import { BlogTerminologies, Content, RightSide } from '@MainComponents/blog-tmpl-terminologies/index.js';
import Introduction from "./components/Introduction/index.js";
import Example from "./components/Example/index.js";
import Conclusion from "./components/Conclusion/index.js";

const DecStorageIPFS = ({ meta }) =>{

 return (<div className="mbot15p">
  <BlogTerminologies activeId="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
      <Introduction />
      <Example />
      <Conclusion />
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default DecStorageIPFS;