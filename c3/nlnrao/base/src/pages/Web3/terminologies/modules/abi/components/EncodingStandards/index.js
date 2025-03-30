import React from "react";
import OrderList from "@Components/order-list/index.js";

const EncodingStandards = () =>{
 return (<div className="mtop15p mbot15p fs16p lh28p">
    <div className="mtop15p"><h2 className="blog-head"><b>ABI Encoding Standards in DeFi</b></h2></div>
    <OrderList data={[
        (<div className="mtop5p">
            <b>ERC-20 (Tokens)</b> - <code><b>transfer(address,uint256)</b></code>,
            <code><b>approve(address,uint256)</b></code>, <code><b>balanceOf(address)</b></code>
        </div>),
        (<div className="mtop5p">
            <b>ERC-721 (NFTs)</b> - <code><b>ownerOf(uint256)</b></code>,
            <code><b>safeTransferFrom(address,address,uint256)</b></code>
        </div>),
        (<div className="mtop5p">
            <b>ERC-1155 (Multi-Tokens)</b> - <code><b>safeBatchTransferFrom(address,address,uint256[],uint256[])</b></code>
        </div>),
        (<div className="mtop5p">
            <b>Uniswap V3 ABI</b> - <code><b>Liquidity provision functions</b></code>,
            <code><b>swap calculations</b></code>
        </div>),
        (<div className="mtop5p">
            <b>Compound & AAVE ABI</b> - <code><b>Borrowing</b></code>, <code><b>lending</b></code>,
            <code><b>collateral management</b></code>
        </div>)
     ]} />
 </div>);
};

export default EncodingStandards;