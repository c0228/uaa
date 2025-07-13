import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>The Rise of Passive Earning in Web 3.0</b></h4></div>
         <div className="mtop5p">Web 3.0 is transforming the digital economy from a read-write web into a <b>read-write-own</b> ecosystem. 
         Users are no longer just consumers of content but also active participants in decentralized networks. One of the most prominent 
         ways to contribute and earn in this new economy is <b>staking</b>. It's the Web 3.0 equivalent of earning interest in a savings 
         account—but decentralized, transparent, and often much more rewarding.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Staking in Web 3.0?</b></h2></div>
   <div className="mtop15p"><b>Staking</b> is the process of <b>locking up crypto assets</b> in a blockchain network to support 
   operations like <b>validating transactions</b> and <b>securing the network</b>, in exchange for rewards. It is an essential 
   part of <b>Proof-of-Stake (PoS)</b> and its variations like <b>DPoS</b> or <b>LPoS</b>, which are consensus mechanisms used by 
   many modern blockchains like <b>Ethereum 2.0</b>, <b>Cardano</b>, <b>Polkadot</b> and <b>Solana</b>.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Concepts in Staking:</b></h4></div>
   <div className="mtop15p">
      <ul>
         <li><b>Validator:</b> A node that validates transactions and earns rewards.</li>
         <li className="mtop5p"><b>Delegator:</b> A user who delegates tokens to a validator instead of running a node.</li>
         <li className="mtop5p"><b>Staking Pool:</b> A collective fund where users combine their tokens to increase their chances of earning rewards.</li>
         <li className="mtop5p"><b>Unstaking/Lock-up Period:</b> A time duration during which your assets are locked and can’t be withdrawn immediately.</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;