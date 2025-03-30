import React from "react";
import { Card } from "e-ui-react";

const Definition = () =>{
  return (<div className="lh28p fs16p mtop15p mbot15p">
    <Card padding={15} backgroundColor="#f0f0f0">
    <div align="center"><h2 className="blog-head"><b>What is an Application Binary Interface (ABI)?</b></h2></div>
    <div className="mtop15p">
    <i><u>An Application Binary Interface (ABI)</u> is a standardized interface that allows interaction with smart contracts on 
    blockchain networks. It defines how data structures and functions are encoded and decoded, enabling users, decentralized 
    applications (DApps), and external programs to interact with the blockchain’s smart contracts.</i>
    </div>
    <div className="mtop15p">
    In DeFi (Decentralized Finance), ABIs play a crucial role by providing a way to interact with financial protocols, such as 
    lending platforms, decentralized exchanges (DEXs), and yield farming contracts.
    </div>
    </Card>
    </div>);
 };

 export default Definition;