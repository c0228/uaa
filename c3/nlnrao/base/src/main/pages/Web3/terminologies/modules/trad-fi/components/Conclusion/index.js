import React from "react";
import { Card } from "e-ui-react";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion: Why Knowing TradFi Matters in Web 3.0</b></h2></div>
   <div className="mtop15p">Understanding <b>Traditional Finance</b> is essential for grasping the disruptive potential 
   of <b>Web 3.0</b> and <b>DeFi (Decentralized Finance)</b>. TradFi isn’t disappearing overnight — it's 
   being <b>reimagined</b>.</div>
   <div className="mtop15p">
      <div>Web 3.0 aims not to destroy TradFi but to solve its <b>inefficiencies</b>:</div>
      <div>
         <ul>
            <li className="mtop5p">Making finance <b>inclusive</b> for the unbanked.</li>
            <li className="mtop5p">Removing <b>middlemen</b> and reducing fees.</li>
            <li className="mtop5p">Enabling <b>real-time settlements</b> and <b>borderless transactions</b>.</li>
         </ul>
      </div>
   </div>
   <div className="mtop15p">By contrasting Web 3.0 with TradFi, developers, investors, and users can 
   better navigate the shift toward decentralized, programmable economies.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><h5 className="blog-head"><b>Note:</b></h5></div>
         <div>
            <ul>
               <li className="mtop5p"><b>TradFi</b> = Centralized financial institutions, regulations, and limited accessibility.</li>
               <li className="mtop5p"><b>Web 3.0</b> = Decentralized, open, and permissionless financial systems.</li>
               <li className="mtop5p">Understanding TradFi helps in designing smarter, more transparent DeFi apps.</li>
               <li className="mtop5p">UI components in React, Angular, and Vue can visualize the evolution.</li>
            </ul>
         </div>
      </Card>
   </div>
 </div>);
};

export default Conclusion;