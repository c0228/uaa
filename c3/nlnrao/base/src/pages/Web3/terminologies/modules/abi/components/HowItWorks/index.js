import React from "react";
import { Highlight } from 'e-ui-react';
import { Header2, Header3 } from "@Components/headers-h15/index.js";
import OrderList from "@Components/order-list/index.js";

const HowItWorks = () =>{
 return (<div className="mtop15p">
   <Header2><b>ABI Structure</b></Header2>

   <div style={{ border:'1px dashed #ccc', paddingLeft:'15px', paddingBottom:'15px' }}>
        <div className="mtop15p">
            <Header3><b>Step 1: Fetching the ABI</b></Header3>
        </div>
        <div className="mtop15p">
            To interact with a DeFi smart contract, users or developers first retrieve its ABI. This is usually found in:
            <OrderList data={[(<div><b>Blockchain explorers</b> (Etherscan, BscScan, PolygonScan)</div>),
                (<div><b>Open-source repositories</b> (GitHub, IPFS)</div>),
                (<div><b>Smart contract deployment tools</b> (Hardhat, Truffle)</div>)]} />
        </div>
   </div>

   <div style={{ border:'1px dashed #ccc', paddingLeft:'15px', paddingBottom:'15px' }}>
        <div className="mtop15p">
            <Header3><b>Step 2: Encoding Function Calls</b></Header3>
        </div>
        <div className="mtop15p lh25p">
            When calling a smart contract function, the ABI encodes the request into a format the Ethereum Virtual Machine 
            (EVM) understands.<br/>
            For example, calling balanceOf(0xABC...) translates into Ethereum RPC Bytecode:
            <div className="mtop15p">
                <Highlight content={`0x70a08231000000000000000000000000ABC...`} lang="html" />
            </div>
            <div className="mtop15p">
                Where:
                <OrderList data={[(<div><code><b>0x70a08231</b></code> is the function selector (balanceOf method).</div>),
                    (<div><code><b>000000000000000000000000ABC...</b></code>  is the parameter (wallet address).</div>)]} />
            </div>
        </div>
   </div>

    <div style={{ border:'1px dashed #ccc', paddingLeft:'15px', paddingBottom:'15px' }}>
        <div className="mtop15p">
            <Header3><b>Step 3: Decoding the Response</b></Header3>
        </div>
        <div className="mtop15p lh25p">
            When a contract returns a value, the ABI decodes the raw EVM output into a readable format.
        </div>
    </div>

 </div>);
};

export default HowItWorks;