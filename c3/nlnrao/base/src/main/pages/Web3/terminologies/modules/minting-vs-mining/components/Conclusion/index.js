import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Conclusion: Understanding the Core of Web 3.0 Asset Creation</b></h2></div>
    <div className="mtop15p">
      <ul>
         <li><b>Minting</b> is commonly used in <b>NFTs and token issuance</b> where assets are directly 
         written to the blockchain.</li>
         <li className="mtop5p"><b>Mining</b> is a <b>validation</b> process involving <b>energy</b> or <b>stake</b> to keep 
         decentralized systems secure.</li>
      </ul>
    </div>
    <div className="mtop15p">In essence:</div>
    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         <div><i>You mint tokens to create them.</i></div>
         <div><i>You mine blocks to validate and earn rewards.</i></div>
      </Card>
    </div>
    <div className="mtop5p">Both are critical to the Web 3.0 ecosystem, just used in <b>different contexts</b>.</div>

    <div className="mtop15p"><h4 className="blog-head"><b>Key Takeaways</b></h4></div>
    <div className="mtop15p">
      <ul>
         <li><b>Minting</b> = Creating new tokens using smart contracts.</li>
         <li className="mtop5p"><b>Mining</b> = Securing the network by validating transactions.</li>
         <li className="mtop5p">Developers can use minting in dApps, games, NFT platforms.</li>
         <li className="mtop5p">Mining is more aligned with blockchain consensus.</li>
      </ul>
    </div>
 </div>);
};

export default Conclusion;