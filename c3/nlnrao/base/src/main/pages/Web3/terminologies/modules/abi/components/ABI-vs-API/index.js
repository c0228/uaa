import React from "react";
import { Highlight } from 'e-ui-react';
import { Header2 } from "@Components/headers-h15/index.js";

const ABIvsAPI = () =>{
 return (<div className="mtop15p">
     <Header2><b>ABI vs. API in DeFi</b></Header2>
     <div class="table-responsive">
         <table class="table">
             <thead>
                <tr style={{ backgroundColor:'#eee' }}>
                    <td><b>Feature</b></td>
                    <td><b>ABI (Application Binary Interface)</b></td>
                    <td><b>API (Application Programming Interface)</b></td>
                </tr>
             </thead>
             <tbody>
                <tr>
                    <td><b>Purpose</b></td>
                    <td>Enables direct interaction with smart contracts.</td>
                    <td>Provides user-friendly access to blockchain data.</td>
                </tr>
                <tr>
                    <td><b>Format</b></td>
                    <td>Binary (EVM Bytecode)</td>
                    <td>JSON, REST, GraphQL</td>
                </tr>
                <tr>
                    <td><b>Usage</b></td>
                    <td>Used in DeFi smart contracts, wallets, DApps.</td>
                    <td>Used in front-end apps, analytics tools.</td>
                </tr>
                <tr>
                    <td><b>Example</b></td>
                    <td>Calling <code><b>swap()</b></code> in Uniswap contract.</td>
                    <td>Fetching price data via an API like CoinGecko.</td>
                </tr>
             </tbody>
        </table>
     </div>
 </div>);
};

export default ABIvsAPI;