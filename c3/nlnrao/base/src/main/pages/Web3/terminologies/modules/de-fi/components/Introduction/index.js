import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>The world of finance has witnessed radical changes over the last few decades — from traditional 
   banking to online payments to mobile wallets. Now, a new era is taking shape: <b>Decentralized Finance</b> or <b>DeFi</b>, one 
   of the most transformative innovations of <b>Web 3.0</b>.</i></div>
   <div className="mtop15p"><i>Web 3.0 isn't just a technical upgrade. It's a shift in <b>philosophy and architecture</b> — focusing 
   on <b>user ownership</b>, <b>trustlessness</b>, and <b>decentralization</b>. DeFi embodies this shift by removing intermediaries 
   and giving users direct control of their financial interactions.</i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction to DeFi (Decentralized Finance)</b></h2></div>
   
   <div className="mtop15p"><h4 className="blog-head"><b>What is DeFi?</b></h4></div>
   <div className="mtop15p">
      <div><b>DeFi</b> stands for <b>Decentralized Finance</b>. It is a blockchain-based financial ecosystem that provides 
      services like:</div>
      <div>
         <ul>
            <li className="mtop5p"><b>Lending and Borrowing</b></li>
            <li className="mtop5p"><b>Decentralized Exchanges (DEX)</b></li>
            <li className="mtop5p"><b>Yield Farming</b></li>
            <li className="mtop5p"><b>Stablecoins</b></li>
            <li className="mtop5p"><b>Insurance</b></li>
            <li className="mtop5p"><b>Synthetic Assets</b></li>
         </ul>
      </div>
      <div>— all <b>without centralized institutions</b> such as banks, brokers, or clearinghouses.</div>

      <div className="mtop15p"><h4 className="blog-head"><b>Key Concepts</b></h4></div>
      <div className="mtop15p">
         <ul>
            <li><b>Smart Contracts:</b> Self-executing contracts coded on blockchains like Ethereum.</li>
            <li className="mtop5p"><b>DApps:</b> Decentralized Applications that interact with smart contracts.</li>
            <li className="mtop5p"><b>Liquidity Pools:</b> Collections of tokens locked in smart contracts for trading or lending.</li>
            <li className="mtop5p"><b>Governance Tokens:</b> Tokens that allow holders to vote on project decisions.</li>
         </ul>
      </div>

      <div className="mtop15p"><h4 className="blog-head"><b>Benefits of DeFi</b></h4></div>
      <div className="mtop15p">
         <ul>
            <li><b>Permissionless access</b> (no KYC required)</li>
            <li className="mtop5p"><b>Global reach</b></li>
            <li className="mtop5p"><b>Open-source development</b></li>
            <li className="mtop5p"><b>Transparency</b></li>
            <li className="mtop5p"><b>Non-custodial (you own your funds)</b></li>
         </ul>
      </div>
   </div>
 </div>);
};

export default Introduction;