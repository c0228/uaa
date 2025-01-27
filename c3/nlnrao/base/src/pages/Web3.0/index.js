import React from "react";
import { ContainerFluid, Row, Col, TextBox, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import OrderList from "@Components/order-list/index.js";
import BlogListHeader from '@Components/blog-list-header/index.js'; 
import BlogItems from '@Components/blog-items/index.js'; 
import BlogData from '@StaticData/web3-blog-list.json';
import './index.css';

const Web3 = ()=>{

 const BlogContent = ({ label, rows })=>{
    return (<Row>
        {Array.from({ length: rows }).map((_, index) => (
          <Col key={index} xxl={12/rows} xl={12/rows}>
            <BlogItems itemList={BlogData?.[label]?.["row"+(index+1)]} />
          </Col>
        ))}
    </Row>);
 };

 const terminologies = ["Understanding Web 1.0, Web 2.0 and Web 3.0","Layer 1 vs. Layer 2 Blockchains",
    "DeFi (Decentralized Finance)","NFTs and Digital Ownership","Tokenomics",
    "Private vs. Public Blockchains","Automated Market Maker (AMM)","Stablecoins","Crypto bridge",
    "Decentralized Autonomous Organization (DAO)","Application Binary Interface (ABI)","Initial DEX Offering (IDO)",
    "Ethereum Request for Comment (ERC)","Traditional Finance (TradFi)","Algorithmic Stablecoin",
    "What is Staking?"]

 return (<>
 <Header menulinks={HeaderMenu} activeId="Blockchain" />
 <div>
 <ContainerFluid>
    <Row>
        <Col xs={12} xl={8} xxl={8}>
          <BlogListHeader label="Zero Knowledge Proofs (ZKPs)" />
          <BlogContent label="zkp" rows={2} />
            
        </Col>
        <Col xs={12} xl={4} xxl={4}>
          <BlogListHeader label="Terminologies" />
          <div style={{ paddingLeft:'5px', marginBottom:'60px' }}>
             {terminologies?.map((t,i)=>{
              return (<div className={(i>0 && "mtop15p")}>
                <span className="terminologies-hgl-link"><b>{t}</b></span>
               </div>);
             })}
          </div>
        </Col>
    </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default Web3;