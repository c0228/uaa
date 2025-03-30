import React from "react";
import { Highlight } from 'e-ui-react';
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
 return (<div className="mtop15p mbot15p fs16p lh28p">
  <div className="mtop15p"><h2 className="blog-head"><b>ABI Structure</b></h2></div>
  <div className="padLeft5p">An ABI is typically represented as a JSON file containing an array of objects. Each object 
    describes a function or event in the smart contract.</div>
  <div className="mtop15p">
    <Highlight content={ABICode} lang="javascript"  />
    <div align="center" className="mtop15p"><b>Example of an ABI JSON for an ERC-20 Token Contract</b></div>
    <div className="mtop15p">
        <div><h4><b>Code Breakdown:</b></h4></div>
        <OrderList data={[(<div className="mtop5p"><code><b>"constant": true</b></code> - This is a read-only function (no state modification).</div>),
            (<div className="mtop5p"><code><b>"inputs"</b></code> - Defines that the function requires an Ethereum address as input.</div>),
            (<div className="mtop5p"><code><b>"name": "balanceOf"</b></code> - The function name.</div>),
            (<div className="mtop5p"><code><b>"outputs"</b></code> - Returns a uint256 balance.</div>),
            (<div className="mtop5p"><code><b>"stateMutability": "view"</b></code> - It only reads blockchain data.</div>),
            (<div className="mtop5p"><code><b>"type": "function"</b></code> - It is a function call.</div>)]} />
    </div>
  </div>
 </div>);
};

export default ABIStructure;
  