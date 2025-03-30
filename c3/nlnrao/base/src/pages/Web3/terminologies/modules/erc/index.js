import React from "react";
import { BlogTerminologies, Content, RightSide } from '@Components/blog-tmpl-terminologies/index.js';

const ERC = ({ meta }) =>{
 return (<div className="mbot15p">
  <BlogTerminologies active="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
        Content
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default ERC;