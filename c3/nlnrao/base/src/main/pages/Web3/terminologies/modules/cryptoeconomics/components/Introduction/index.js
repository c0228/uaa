import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>As the web evolves from a static, read-only environment (Web 1.0) to a dynamic, user-driven 
      and decentralized ecosystem (Web 3.0), <b>new terminologies</b> have emerged. These concepts help define how decentralized 
      systems function without centralized authorities. Among them, <b>Crypto-Economics</b> is a foundational concept powering 
      blockchains, token-based systems, and DAOs.</i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Crypto-Economics?</b></h2></div>
   <div className="mtop15p"><b>Crypto-Economics</b> is the combination of <b>cryptography</b> and <b>economics</b> to design 
   decentralized systems that are secure, trustless, and incentivized. It ensures participants behave honestly in a blockchain 
   system without the need for central control.</div>
   <div className="mtop15p">
      <div>It underpins blockchain protocols like Bitcoin and Ethereum, enabling features like:</div>
      <div>
         <ul>
            <li className="mtop5p">Trustless consensus (Proof of Work, Proof of Stake)</li>
            <li className="mtop5p">Incentive mechanisms (mining, staking rewards)</li>
            <li className="mtop5p">Penalty mechanisms (slashing, gas fees)</li>
            <li className="mtop5p">Governance models (voting, proposal staking)</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p">
      <div>In simple terms:</div>
      <Card padding={15} backgroundColor="#eee">
         <b><i>Crypto-Economics = Game Theory + Incentives + Cryptographic Proofs</i></b>
      </Card>
   </div>
 </div>);
};

export default Introduction;