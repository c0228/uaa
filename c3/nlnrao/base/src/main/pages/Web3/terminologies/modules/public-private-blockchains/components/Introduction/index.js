import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>Web 3.0 promises a decentralized future where users control their data, identity, and transactions. 
      At the heart of this revolution lies <b>blockchain technology</b>. But not all blockchains are built the same. One key 
      distinction that shapes how blockchain networks operate is whether they are <b>public</b> or <b>private</b>. Understanding 
      this difference is critical for developers, businesses, and enthusiasts navigating the Web3 space.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Are Private and Public Blockchains?</b></h2></div>
   <div className="mtop15p">A <b>public blockchain</b> is a <b>decentralized network</b> that anyone can join and participate 
   in. These are <b>permissionless</b>, meaning no one controls who can access or validate transactions. Examples 
   include <b>Bitcoin</b>, <b>Ethereum</b>, and <b>Polkadot</b>.</div>
   <div className="mtop15p">In contrast, a <b>private blockchain</b> is <b>permissioned</b>, meaning only certain participants 
   are allowed to access the network. These are typically used by organizations for internal operations, offering more control 
   over data and access. Examples include <b>Hyperledger Fabric</b>, <b>R3 Corda</b> and <b>Quorum</b>.</div>
   <div className="mtop15p">Let’s dive deeper into the <b>differences</b>, <b>use cases</b>, and how to interact with them 
   using modern JavaScript frameworks.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>Key Differences Between Public and Private Blockchains</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Feature", "Public Blockchain", "Private Blockchain"]} 
        columns={[
            [(<div><b>Access</b></div>),"Open to anyone","Restricted to authorized users"],
            [(<div><b>Consensus Mechanism</b></div>),"PoW, PoS","RAFT, PBFT"],
            [(<div><b>Speed and Scalability</b></div>),"Slower","Faster"],
            [(<div><b>Data Transparency</b></div>),"Fully transparent","Controlled transparency"],
            [(<div><b>Use Case</b></div>),"Cryptocurrencies, DeFi, NFTs","Supply chain, banking, enterprise apps"],
            [(<div><b>Example Platforms</b></div>),"Ethereum, Bitcoin, Solana","Hyperledger, Quorum, R3 Corda"]
          ]} />
   </div>
 </div>);
};

export default Introduction;