import React from "react";
import { Highlight } from 'e-ui-react';
import { Header2 } from "@Components/headers-h15/index.js";
import OrderList from "@Components/order-list/index.js";

const ABIStructure = () =>{
 const ABICode = `[
    {
        "constant": true,
        "inputs": [
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]
`;
 return (<div className="mtop15p">
  <Header2><b>ABI Structure</b></Header2>
  <div className="lh25p">An ABI is typically represented as a JSON file containing an array of objects. Each object 
    describes a function or event in the smart contract.</div>
  <div className="mtop15p">
    <Highlight content={ABICode} lang="javascript"  />
    <div align="center" className="mtop15p"><b>Example of an ABI JSON for an ERC-20 Token Contract</b></div>
    <div className="mtop15p">
        <div><b>Code Breakdown:</b></div>
        <OrderList data={[(<div><code><b>"constant": true</b></code> - This is a read-only function (no state modification).</div>),
            (<div><code><b>"inputs"</b></code> - Defines that the function requires an Ethereum address as input.</div>),
            (<div><code><b>"name": "balanceOf"</b></code> - The function name.</div>),
            (<div><code><b>"outputs"</b></code> - Returns a uint256 balance.</div>),
            (<div><code><b>"stateMutability": "view"</b></code> - It only reads blockchain data.</div>),
            (<div><code><b>"type": "function"</b></code> - It is a function call.</div>)]} />
    </div>
  </div>
 </div>);
};

export default ABIStructure;
  