import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Conclusion = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p"><h2 className="blog-head"><b>Conclusion: Choosing the Right Path</b></h2></div>
   <div className="mtop15p">In the world of Web 3.0, understanding <b>On-Chain</b> vs. <b>Off-Chain</b> is key to 
   building scalable, secure, and cost-effective decentralized applications.</div>
   <div className="mtop15p">
      <SimpleTable header={["Feature","On-Chain","Off-Chain"]} 
        columns={[
            ["Transparency","Fully Transparent","Depends on External System"],
            ["Cost","Expensive (gas fees)","Low or Free"],
            ["Speed","Slower","Faster"],
            ["Storage Limit","Limited","Scalable"],
            ["Trust","Trustless","Trust-based or verified externally"],
          ]} />
   </div>
   <div className="mtop15p">Smart dApp developers often combine both models for <b>hybrid solutions</b> — storing critical 
   operations on-chain while keeping heavy computations and files off-chain. This balance is essential for optimal Web 3.0 
   development.</div>
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div><span className="blog-head"><b>Note:</b></span></div>
         <div>Use on-chain data for <b>verifiable logic</b> like smart contracts, and off-chain data 
         for <b>performance</b> - <b>heavy</b> or <b>non-critical assets</b> like media, analytics, or 
         user preferences.</div>
      </Card>
   </div>
 </div>);
};

export default Conclusion;