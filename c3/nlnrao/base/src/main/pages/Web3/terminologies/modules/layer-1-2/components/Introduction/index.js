import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15}>
         <div><h4 className="blog-head"><b>Why Scalability Matters in Web3?</b></h4></div>
         <div className="mtop15p">As Web 3.0 continues to evolve, blockchain technology remains at its core — powering 
            everything from decentralized finance (DeFi) to NFTs and DAOs. But with growth comes the challenge of 
            scalability. High transaction fees, network congestion, and long confirmation times have driven the need to 
            rethink how blockchains handle increased demand. Enter <b>Layer 1 </b> and <b>Layer 2</b> solutions — the dynamic 
            duo of scalability.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction:  What Are Layer 1 and Layer 2 Blockchains?</b></h2></div>
   <div className="mtop15p"><b>Layer 1 (L1)</b> refers to the <b>base blockchain network</b> such as <b>Bitcoin</b>, <b>Ethereum</b> or <b>Solana</b>. 
   These networks handle transactions, consensus, and data structures. Improving scalability on Layer 1 usually means changing the base protocol 
   (like increasing block size or adopting new consensus mechanisms).</div>
   <div className="mtop15p"><b>Layer 2 (L2)</b> is <b>built-on top of Layer 1</b> to improve throughput and reduce costs. It processes transactions 
   off the main chain and settles them later on L1. Examples include <b>Polygon</b>, <b>Optimism</b>, and <b>Arbitrum</b> for Ethereum.</div>
   <div className="mtop15p">
      <SimpleTable header={["Category", "Layer 1", "Layer 2"]} 
        columns={[
            ["Examples","Ethereum, Bitcoin, Solana","Polygon, Arbitrum, Optimism, zkSync"],
            ["Purpose","Core network & security","Scalability & speed improvements"],
            ["Scalability","Native (by protocol upgrade)","External (off-chain/on-chain combinations)"],
            ["Speed","Moderate","High"],
            ["Cost","High","Low"]
          ]} />
   </div>
 </div>);
};

export default Introduction;