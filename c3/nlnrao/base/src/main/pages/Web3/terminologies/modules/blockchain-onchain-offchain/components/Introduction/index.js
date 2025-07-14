import React from "react";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><i>As Web 3.0 continues to evolve, it brings revolutionary changes to how we store, process, and 
   verify data. One of the foundational elements in this ecosystem is <i>blockchain technology</i>. But understanding how data 
   interacts with the blockchain is critical—especially the difference between <b>on-chain</b> and <b>off-chain</b> data.</i></div>
   <div className="mtop15p"><i>Before diving into decentralized apps (dApps), token protocols, or NFTs, developers must clearly 
   understand <b>where</b> and <b>how</b> data is stored. This is where on-chain and off-chain concepts come into play.</i></div>
   
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What is On-Chain and Off-Chain?</b></h2></div>
   <div className="mtop15p">In Web 3.0, <b>On-Chain</b> and <b>Off-Chain</b> refer to 
   the <b>location and mechanism of data storage and processing</b> in relation to the blockchain.</div>

   <div className="mtop15p"><h4 className="blog-head"><b>On-Chain</b></h4></div>
   <div className="mtop15p">
      <div><b>On-Chain</b> operations are executed <i>directly</i> on the blockchain. This includes:</div>
      <div>
         <ul>
            <li className="mtop5p">Smart contract executions</li>
            <li className="mtop5p">Token transfers</li>
            <li className="mtop5p">DAO governance votes</li>
            <li className="mtop5p">Transaction records</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h5 className="blog-head"><b>Pros:</b></h5></div>
   <div className="mtop15p">
      <ul>
         <li>Transparent and verifiable</li>
         <li className="mtop5p">Immutable</li>
         <li className="mtop5p">Secure</li>
      </ul>
   </div>
   <div className="mtop15p"><h5 className="blog-head"><b>Cons:</b></h5></div>
   <div className="mtop15p">
      <ul>
         <li>Expensive (gas fees)</li>
         <li className="mtop5p">Slower</li>
         <li className="mtop5p">Limited in storage capacity</li>
      </ul>
   </div>

   <div className="mtop15p"><h4 className="blog-head"><b>Off-Chain</b></h4></div>
   <div className="mtop15p">
      <div><b>Off-Chain</b> operations occur <i>outside</i> the blockchain but can still interact with it. Examples include:</div>
      <div>
         <ul>
            <li className="mtop5p">Large file storage (e.g., images for NFTs)</li>
            <li className="mtop5p">Identity verification via external oracles</li>
            <li className="mtop5p">Data computation outside smart contracts</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p"><h5 className="blog-head"><b>Pros:</b></h5></div>
   <div className="mtop15p">
      <ul>
         <li>Cost-effective</li>
         <li className="mtop5p">Faster</li>
         <li className="mtop5p">Scalable</li>
      </ul>
   </div>
   <div className="mtop15p"><h5 className="blog-head"><b>Cons:</b></h5></div>
   <div className="mtop15p">
      <ul>
         <li>Requires trust or external validation</li>
         <li className="mtop5p">Less transparent</li>
      </ul>
   </div>
 </div>);
};

export default Introduction;