import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h4 className="blog-head"><b>Why Tokenomics Matters in Web 3.0?</b></h4></div>
         <div className="mtop15p">Imagine entering a virtual world where every user is an investor, every contribution earns 
         rewards, and every vote shapes the future. This is the decentralized dream of Web 3.0 — where <b>economics meets 
         blockchain technology</b>. At the heart of this vision lies a crucial principle: <b>Tokenomics</b>.</div>
         <div className="mtop15p">As traditional business models evolve into decentralized networks, understanding tokenomics 
         becomes essential not just for developers and investors but also for users who interact with dApps (decentralized 
         applications) daily.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is Tokenomics?</b></h2></div>
   <div className="mtop15p"><b>Tokenomics</b> (a blend of "Token" and "Economics") refers to the study and design of the 
   economic system surrounding a <b>cryptographic token</b>. It governs how a token is created, distributed, used, and 
   eventually retired. Tokenomics ensures a Web 3.0 project is sustainable, incentivized, and self-regulating.</div>
   <div className="mtop15p"><h4 className="blog-head"><b>Key Concepts in Tokenomics:</b></h4></div>
   <div className="mtop15p">
      <ul>
         <li><b>Token Supply:</b> Total vs circulating supply</li>
         <li className="mtop5p"><b>Utility:</b> What the token is used for (governance, access, payment)</li>
         <li className="mtop5p"><b>Incentives:</b> Mining, staking, liquidity provision, airdrops</li>
         <li className="mtop5p"><b>Burn Mechanism:</b> Reducing token supply to increase scarcity</li>
         <li className="mtop5p"><b>Governance:</b> Token holders vote on protocol upgrades</li>
      </ul>
   </div>
   <div className="mtop15p">Tokenomics provides the <b>rules and rewards</b> of a 
   decentralized ecosystem — shaping user behavior, platform growth, and long-term value.</div>
 </div>);
};

export default Introduction;