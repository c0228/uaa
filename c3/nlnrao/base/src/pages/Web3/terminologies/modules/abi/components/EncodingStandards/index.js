import React from "react";
import { Highlight } from 'e-ui-react';
import { Header2, Header3 } from "@Components/headers-h15/index.js";
import OrderList from "@Components/order-list/index.js";

const EncodingStandards = () =>{
 return (<div className="mtop15p">
    <Header2><b>ABI Encoding Standards in DeFi</b></Header2>
    <OrderList data={[
        (<div>
            <b>ERC-20 (Tokens)</b> - <code><b>transfer(address,uint256)</b></code>,
            <code><b>approve(address,uint256)</b></code>, <code><b>balanceOf(address)</b></code>
        </div>),
        (<div>
            <b>ERC-721 (NFTs)</b> - <code><b>ownerOf(uint256)</b></code>,
            <code><b>safeTransferFrom(address,address,uint256)</b></code>
        </div>),
        (<div>
            <b>ERC-1155 (Multi-Tokens)</b> - <code><b>safeBatchTransferFrom(address,address,uint256[],uint256[])</b></code>
        </div>),
        (<div>
            <b>Uniswap V3 ABI</b> - <code><b>Liquidity provision functions</b></code>,
            <code><b>swap calculations</b></code>
        </div>),
        (<div>
            <b>Compound & AAVE ABI</b> - <code><b>Borrowing</b></code>, <code><b>lending</b></code>,
            <code><b>collateral management</b></code>
        </div>)
     ]} />
 </div>);
};

export default EncodingStandards;