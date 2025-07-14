import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div align="center" className="mtop15p"><i><u>Understanding the Threat of Identity Fraud in Decentralized Networks</u></i></div>
   <div className="mtop15p"><i>Web 3.0 represents a new era of the internet — decentralized, trustless, and user-owned. Blockchain, 
      smart contracts, decentralized applications (dApps), and tokens drive this ecosystem. But as we build trust in code and 
      cryptography instead of centralized authorities, new forms of attacks also emerge — one of the most notorious being 
      the <b>Sybil Attack</b>.</i></div>
   <div className="mtop15p"><i>In a network where identity equals power, what happens when an attacker creates thousands of fake 
      identities? Let’s dive deep into this deceptive tactic and its implications on decentralized systems.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is a Sybil Attack?</b></h2></div>
   <div className="mtop15p">A <b>Sybil Attack</b> is an attack where a single entity creates multiple fake identities (nodes) in 
   a network to gain disproportionate influence or disrupt normal operations.</div>
   <div className="mtop15p">In decentralized networks like blockchains and peer-to-peer systems, where trust is distributed and 
   votes or actions are often weighted equally, Sybil attacks can be devastating.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>Real-world impact of Sybil Attacks:</b></h4></div>
   <div className="mtop15p">
      <ul>
         <li>Disrupting consensus mechanisms in blockchains.</li>
         <li className="mtop5p">Manipulating voting-based governance in DAOs.</li>
         <li className="mtop5p">Distorting online reputation systems in marketplaces.</li>
         <li className="mtop5p">Unfairly controlling airdrops or rewards in dApps.</li>
      </ul>
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Common Scenarios in Web 3.0 Affected by Sybil Attacks</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Use Case", "How Sybil Attacks Impact"]} 
        columns={[
            [(<div><b>DAO Governance</b></div>), "A user creates many wallets to control votes."],
            [(<div><b>P2P Lending</b></div>), "Attackers create fake borrowers/lenders to scam others."],
            [(<div><b>Airdrop Farming</b></div>), "Users create many wallets to claim rewards multiple times."],
            [(<div><b>Decentralized Identity (DID)</b></div>), "Impersonation of multiple identities to gain influence."],
          ]} />
   </div>
 </div>);
};

export default Introduction;