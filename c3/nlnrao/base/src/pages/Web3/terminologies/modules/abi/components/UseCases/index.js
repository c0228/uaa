import React from "react";
import { Highlight } from 'e-ui-react';
import { Header2 } from "@Components/headers-h15/index.js";

const UseCases = () =>{
 return (<div className="mtop15p">
    <Header2><b>ABI Use Cases in DeFi</b></Header2>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr style={{ backgroundColor:'#eee' }}>
                    <td><b>Use Case</b></td>
                    <td><b>Description</b></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>DEX Aggregators</b></td>
                    <td>ABIs help protocols like 1inch, Matcha interact with multiple DEXs (Uniswap, SushiSwap).</td>
                </tr>
                <tr>
                    <td><b>Yield Farming</b></td>
                    <td>Platforms like Yearn Finance use ABIs to deposit and withdraw assets from multiple strategies.</td>
                </tr>
                <tr>
                    <td><b>Flash Loans</b></td>
                    <td>AAVE and dYdX rely on ABI calls to borrow assets instantly and repay within the same transaction.</td>
                </tr>
                <tr>
                    <td><b>Oracles</b></td>
                    <td>Chainlink fetches off-chain data and interacts with smart contracts using ABI.</td>
                </tr>
                <tr>
                    <td><b>Automated Trading</b></td>
                    <td>DeFi trading bots use ABIs to execute limit orders, arbitrage, and liquidation calls.</td>
                </tr>
            </tbody>
        </table>
    </div>
 </div>);
};

export default UseCases;