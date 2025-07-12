import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p"><b>Crypto-Economics</b> is the engine behind the decentralized web. It’s what enables systems to 
   run without middlemen, by aligning incentives and disincentives using cryptographic trust. Whether you’re developing dApps, 
   running a DAO, or building the next blockchain protocol, understanding this concept is <b>non-negotiable</b>.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
      <div>It’s more than a term — it’s <b>how Web 3.0 thinks</b></div>
      <div className="mtop15p">If you're building a Web3 dApp:</div>
      <div>
         <ul>
            <li className="mtop5p">Incorporate <b>economic incentives</b> to encourage honest user behavior.</li>
            <li className="mtop5p">Use <b>on-chain governance</b> to let the community drive decisions.</li>
            <li className="mtop5p">Design token models carefully: inflation, utility, distribution.</li>
         </ul>
      </div>
      </Card>
   </div>
 </div>);
};

export default Conclusion;