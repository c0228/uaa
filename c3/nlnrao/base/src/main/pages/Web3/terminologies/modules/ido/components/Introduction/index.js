import React from "react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>The blockchain universe has revolutionized fundraising. 
      From <b>ICOs (Initial Coin Offerings)</b> to <b>STOs (Security Token Offerings)</b>, each model had its era. 
      However, the decentralized ethos of <b>Web 3.0</b> demanded something more trustless, efficient, and inclusive. 
      That’s where <b>Initial DEX Offerings (IDOs)</b> emerged as a game-changer.</i></div>
   <div className="mtop15p">If you're a developer, investor, or blockchain enthusiast, understanding IDOs will help 
      you navigate the ever-evolving DeFi space. Let’s explore.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is an Initial DEX Offering (IDO)?</b></h2></div>
   <div className="mtop15p">An <b>Initial DEX Offering (IDO)</b> is a <b>decentralized crowdfunding</b> method where crypto 
   tokens are launched via a <b>Decentralized Exchange (DEX)</b>. Unlike centralized fundraising models, IDOs allow users 
   to participate <b>permissionlessly</b>, directly from their wallets, with 
   better <b>liquidity</b>, <b>instant token listing</b> and <b>lower costs</b>.</div>

   <div className="mtop15p"><h2 className="blog-head"><b>Why IDO over ICO?</b></h2></div>
   <div className="mtop15p">
      <SimpleTable header={["Feature", "ICO", "IDO"]} 
        columns={[
            ["Platform","Centralized website","Decentralized exchange (DEX)"],
            ["Listing Delay","Delay","Immediate"],
            ["Fund Custody","Handled by issuer","Handled via smart contracts"],
            ["Transparency","Limited","High"]
          ]} />
   </div>
 </div>);
};

export default Introduction;