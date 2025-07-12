import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>As we transition from traditional Web 2.0 applications to decentralized Web 3.0 environments, 
   new concepts dominate the conversation—terms like <b>minting</b> and <b>mining</b> are everywhere. Whether you're developing 
   decentralized apps (dApps), exploring NFTs, or participating in crypto networks, understanding these terms is essential.</i></div>
   <div className="mtop15p"><i>Both <b>minting</b> and <b>mining</b> involve the creation of tokens, but they differ significantly 
   in process, purpose, and application. This blog dives deep into these two foundational terms and includes practical examples 
   with React, Angular, and Vue components.</i></div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: Minting vs Mining</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Aspect","Minting","Mining"]} 
            columns={[
                  [(<div><b>Definition</b></div>),"Creating new tokens (mostly NFTs or ERC-20 tokens)","Validating transactions and adding blocks to blockchain"],
                  [(<div><b>Common Use</b></div>),"NFTs, token creation","Bitcoin, Ethereum (PoW)"],
                  [(<div><b>Mechanism</b></div>),"Smart contracts","Proof-of-Work (PoW) or Proof-of-Stake (PoS)"],
                  [(<div><b>Tools</b></div>),"Solidity, Web3.js, Token standards (ERC-721, ERC-20)","Mining rigs, validators, consensus mechanisms"],
                  [(<div><b>Energy</b></div>),"Low energy consumption","High (PoW), moderate to low (PoS)"]
               ]} />
   </div>
 </div>);
};

export default Introduction;