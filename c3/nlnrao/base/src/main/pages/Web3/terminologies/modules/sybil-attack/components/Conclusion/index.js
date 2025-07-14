import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>How Web 3.0 Defends Against Sybil Attacks?</b></h2></div>
   <div className="mtop15p">To mitigate Sybil attacks, Web 3.0 ecosystems employ several techniques:</div>
   <div className="mtop15p">   
      <SimpleTable header={["Technique", "Description"]} 
            columns={[
                  [(<div><b>Proof of Work / Stake</b></div>),"Makes identity creation expensive or require ownership (e.g., ETH in PoS)."],
                  [(<div><b>Decentralized Identity</b></div>),"DID systems bind identity to verifiable credentials."],
                  [(<div><b>Reputation Systems</b></div>),"Weighting votes or trust by historical behavior, not just presence."],
                  [(<div><b>Rate Limiting</b></div>),"Limits actions from one wallet or IP address per time frame."],
                  [(<div><b>Social Graph Analysis</b></div>),"Detects bot-like behavior across network connections."],
               ]} />
   </div>

   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion</b></h2></div>
   <div className="mtop15p">As Web 3.0 empowers users and removes intermediaries, <b>Sybil Attacks</b> pose a serious threat by 
   exploiting the open, trustless nature of decentralized networks. From fake voters in DAOs to fraudulent reward claims in dApps, 
   these attacks can destabilize systems built on equality and consensus.</div>
   <div className="mtop15p">Building robust <b>identity, staking mechanisms, and behavior analytics</b> into dApps and protocols 
   is essential to guard against this deception.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         A <b>Sybil Attack</b> occurs when one user creates multiple identities to unfairly influence a decentralized system. 
         Proper security models like <b>Proof of Stake</b>, <b>Decentralized Identity</b>, and <b>Rate Limits</b> are essential 
         to mitigate it in Web 3.0 environments.
      </Card>
   </div>
 </div>);
};

export default Conclusion;