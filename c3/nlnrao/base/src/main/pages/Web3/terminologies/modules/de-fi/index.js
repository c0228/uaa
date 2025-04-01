import React from "react";
import { BlogTerminologies, Content, RightSide } from '@MainComponents/blog-tmpl-terminologies/index.js';

const DeFi = ({ meta }) =>{
 return (<div className="mbot15p">
  <BlogTerminologies activeId="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
        Content
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default DeFi;