import React from "react";
import { BlogTerminologies, Content, RightSide } from '@Components/blog-tmpl-terminologies/index.js';

const Layer1N2 = ({ meta }) =>{
 return (<div>
  <BlogTerminologies active="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
        Content
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default Layer1N2;