import React from "react";
import { Header2 } from "@Components/headers-h15/index.js";
import OrderList from "@Components/order-list/index.js";

const Importance = () =>{
    return (<div className="mtop15p">
      <Header2><b>Importance of ABI in DeFi</b></Header2>
      <OrderList data={[(<div><b>Interoperability –</b><br/> ABIs enable DeFi applications to interact with smart contracts written 
        in different programming languages (Solidity, Vyper).</div>),
        (<div><b>Automation –</b><br/> DeFi bots, oracles, and scripts rely on ABIs to interact with contracts programmatically.</div>),
        (<div><b>Security –</b><br/> ABIs define strict input and output structures, preventing invalid or malicious function calls.</div>),
        (<div><b>Wallet & DApp Integration –</b><br/> Wallets like MetaMask and DApps use ABIs to call smart contract functions.</div>)]} />
    </div>);
};

export default Importance;