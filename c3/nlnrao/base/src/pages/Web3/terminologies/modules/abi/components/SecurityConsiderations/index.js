import React from "react";
import { Highlight } from 'e-ui-react';
import { Header2 } from "@Components/headers-h15/index.js";
import OrderList from "@Components/order-list/index.js";

const SecurityConsiderations = () =>{
 return (<div className="mtop15p">
   <Header2><b>Security Considerations in ABI</b></Header2>
   <div className="mtop15p">
    <OrderList data={[(<div><b>Re-Entrancy Vulnerabilities –</b><br/> Improper use of <code><b>call()</b></code> and 
        <code><b>delegatecall()</b></code> can lead to re-entrancy attacks.</div>),
        (<div><b>Incorrect ABI Encoding –</b><br/> Sending improperly encoded parameters can cause contract failures.</div>),
        (<div><b>ABI Spoofing –</b><br/> Malicious actors can fake ABI functions to trick users.</div>),
        (<div><b>Smart Contract Upgrades –</b><br/> If a contract is upgradeable, old ABIs may not work with the new contract.</div>)]} />
   </div>
 </div>);
};

export default SecurityConsiderations;