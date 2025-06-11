import React from "react";
import { Highlight } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import { Header2 } from "@MainComponents/headers-h15/index.js";

const WALLET_CONNECT_CODE = `import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectWallet() {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("User rejected wallet connection", err);
      }
    } else {
      alert("Install MetaMask!");
    }
  };

  return (
    <div>
      <button onClick={connectWallet}>
        {account ? \`Connected: ${account.slice(0, 6)}...\` : "Connect Wallet"}
      </button>
    </div>
  );
}`;

const ConnectWallet = () =>{
 return (<div className="mtop15p mbot15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Connect Metamask Wallet</b></h2></div>
    <div><Header2><b>Steps to Implement in React:</b></Header2></div>
    <div className="mtop15p mbot15p">
        <OrderList data={[(<div>
            <div><b>Install Web3 or Ethers</b></div>
            <div className="mtop5p">
                <Highlight content={`npm install ethers`} lang="javascript" />
            </div>
        </div>),(<div>
            <div><b>React JS code to Connect to Wallet</b></div>
            <div className="mtop5p">
                <Highlight content={WALLET_CONNECT_CODE} lang="javascript" />
            </div>
        </div>)]} />
        
        
    </div>
 </div>);
};

export default ConnectWallet;