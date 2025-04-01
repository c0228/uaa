import React from "react";
import OrderList from "@MainComponents/order-list/index.js";

const Importance = () =>{
    return (<div className="mtop15p mbot15p fs16p lh28p">
      <div className="mtop15p"><h2 className="blog-head"><b>Importance of ABI in DeFi</b></h2></div>
      <OrderList data={[(<div className="mtop5p"><b>Interoperability –</b><br/> ABIs enable DeFi applications to interact with smart contracts written 
        in different programming languages (Solidity, Vyper).</div>),
        (<div className="mtop5p"><b>Automation –</b><br/> DeFi bots, oracles, and scripts rely on ABIs to interact with contracts programmatically.</div>),
        (<div className="mtop5p"><b>Security –</b><br/> ABIs define strict input and output structures, preventing invalid or malicious function calls.</div>),
        (<div className="mtop5p"><b>Wallet & DApp Integration –</b><br/> Wallets like MetaMask and DApps use ABIs to call smart contract functions.</div>)]} />
    </div>);
};

export default Importance;