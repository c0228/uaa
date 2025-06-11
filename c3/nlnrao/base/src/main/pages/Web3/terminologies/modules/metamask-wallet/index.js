import React from "react";
import { BlogTerminologies, Content, RightSide } from '@MainComponents/blog-tmpl-terminologies/index.js';
import ConnectWallet from './components/connect-wallet/index.js';

const MetamaskWallet = ({ meta }) =>{
 return (<div className="mbot15p">
  <BlogTerminologies activeId="Blockchain" prefix="tech/web3.0/terminologies/"  metaData={meta}>
    <Content>
        <ConnectWallet />
    </Content>
    <RightSide>
    </RightSide>
  </BlogTerminologies>
 </div>);
};

export default MetamaskWallet;