import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const SecurityConsiderations = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
  <div className="mtop15p"><h2 className="blog-head"><b>Security Considerations in ABI</b></h2></div>
  <div className="mtop15p">
    <OrderList data={[(<div className="mtop5p"><b>Re-Entrancy Vulnerabilities –</b><br/> Improper use of <code><b>call()</b></code> and 
        <code><b>delegatecall()</b></code> can lead to re-entrancy attacks.</div>),
        (<div className="mtop5p"><b>Incorrect ABI Encoding –</b><br/> Sending improperly encoded parameters can cause contract failures.</div>),
        (<div className="mtop5p"><b>ABI Spoofing –</b><br/> Malicious actors can fake ABI functions to trick users.</div>),
        (<div className="mtop5p"><b>Smart Contract Upgrades –</b><br/> If a contract is upgradeable, old ABIs may not work with the new contract.</div>)]} />
  </div>
 </div>);
};

export default SecurityConsiderations;