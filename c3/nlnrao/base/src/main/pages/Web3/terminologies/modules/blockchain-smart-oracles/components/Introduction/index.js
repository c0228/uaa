import React from "react";
import { Card } from "e-ui-react";
import SimpleTable from "@MainComponents/simple-table/index.js";

const Introduction = () =>{
 return (<div className="mtop15p lh28p fs16p">
   <div className="mtop15p">
      <Card padding={15} backgroundColor="#eee">
         <div align="center"><h4 className="blog-head"><b>Bridging the On-Chain and Off-Chain Worlds</b></h4></div>
         <div className="mtop15p">In the realm of Web 3.0, blockchains are highly secure, trustless, and decentralized — 
            but they’re also inherently <b>isolated</b> from external data. They can’t natively access the outside world 
            (like stock prices, weather data, or even the current time). To overcome this, <b>Oracles</b> come into play — 
            acting as <b>middleware</b> between the blockchain and the real world.</div>
         <div className="mtop15p">But there’s a game-changer in this space: <b>Smart Oracles</b>.</div>
      </Card>
   </div>
   <div className="mtop15p"><h2 className="blog-head"><b>Introduction: What Are Blockchain Smart Oracles?</b></h2></div>
   <div className="mtop15p">
      <div><b>Smart Oracles</b> are advanced versions of oracles that not only <b>fetch and validate off-chain data</b> but 
      also <b>execute programmable logic</b> before submitting it to the blockchain. Unlike basic oracles that simply provide 
      data, smart oracles can:</div>
      <div>
         <ul>
            <li className="mtop5p">Aggregate data from multiple sources</li>
            <li className="mtop5p">Execute off-chain computation</li>
            <li className="mtop5p">Trigger smart contracts conditionally</li>
            <li className="mtop5p">Provide richer, programmable automation</li>
         </ul>
      </div>
      <div className="mtop15p">In essence, <b>Smart Oracles are autonomous agents</b> that expand the capabilities of smart 
      contracts by connecting them to external APIs, IoT devices, databases, or web services — <b>securely and reliably</b>.</div>

      <div className="mtop15p"><h4 className="blog-head"><b>Key Characteristics:</b></h4></div>
      <div className="mtop15p">
         <ul>
            <li>Built using scripting logic (e.g., using Chainlink Functions, Provable, Nest Protocol)</li>
            <li className="mtop5p">Operate in a trust-minimized or decentralized manner</li>
            <li className="mtop5p">Support multiple data types (numeric, binary, events, etc.)</li>
            <li className="mtop5p">Run off-chain but interact with on-chain systems</li>
         </ul>
      </div>

      <div className="mtop15p"><h2 className="blog-head"><b>Real-World Use Cases of Smart Oracles:</b></h2></div>
      <div className="mtop15p">
         <SimpleTable header={["Use Case", "Deascription"]} 
               columns={[
                     [(<div><b>DeFi Lending</b></div>), "Pull real-time asset prices to update collateral values"],
                     [(<div><b>Insurance</b></div>), "Trigger payouts based on weather or flight data"],
                     [(<div><b>Supply Chain</b></div>), "Track goods using IoT and automatically release payments"],
                     [(<div><b>Gaming</b></div>), "Connect in-game outcomes or real-world sports results"],
                     [(<div><b>Voting Systems</b></div>), "Retrieve verified identities from external databases"],
                  ]} />
      </div>
   </div>
 </div>);
};

export default Introduction;