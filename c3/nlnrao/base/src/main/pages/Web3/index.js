import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Icon } from "e-ui-react";
import { Pill, Colors } from 'e-ui-react';
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import OrderList from "@MainComponents/order-list/index.js";
import BlogListHeader from '@MainComponents/blog-list-header/index.js'; 
import BlogItems from '@MainComponents/blog-items/index.js'; 
import BlogData from '@MainStaticData/web3/overview.json';
import Introduction from './components/introduction/index.js';
import Terminologies from '@MainComponents/terminologies-list/index.js';
import MarketPricing from "./live-statistics/market-pricing/index.js";
import MarketTrends from "./live-statistics/market-trends/index.js";
import Routes from "./component.routes.json";
import ScLSolidity from "./smart-contracts/sc-l-solidity/index.js";
import ScLVyper from "./smart-contracts/sc-l-vyper/index.js";
import ScLRust from "./smart-contracts/sc-l-rust/index.js";

import Keywords from '@MainComponents/keywords/index.js';
import KeywordData01 from '@MainStaticData/web3/keywords-web3.json';
import KeywordData02 from '@MainStaticData/web3/keywords-blockchain.json';
import KeywordData03 from '@MainStaticData/web3/keywords-defi.json';
import KeywordData04 from '@MainStaticData/web3/keywords-nft.json';
import KeywordData05 from '@MainStaticData/web3/keywords-gamefi.json';
import KeywordData06 from '@MainStaticData/web3/keywords-metaverse.json';
import './index.css';

const Web3 = ()=>{

 useEffect(()=>{
   document.body.style.backgroundColor='#fff';
 },[]);

 const BlogContent = ({ label, rows })=>{
    return (<Row>
        {Array.from({ length: rows }).map((_, index) => (
          <Col key={index} xxl={12/rows} xl={12/rows}>
            <BlogItems itemList={BlogData?.[label]?.["row"+(index+1)]} />
          </Col>
        ))}
    </Row>);
 };

 return (<>
 <Header menulinks={HeaderMenu} activeId="Blockchain" />
 <div>
 <ContainerFluid>
    <Row style={{ backgroundColor:'#f9f9f9', border:'1px dashed #aaa', margin:'3px', padding:'15px' }}>
      <Col md={4}>
        <Introduction />
      </Col>
    </Row>
    <Row>
      <Col xs={12} xl={12} xxl={12}>
        <BlogListHeader label="Today's Live Cryptocurrency Dashboard – Market Trends, Real-Time Prices & Stats" /> 
      </Col>
    </Row>
    <Row>
      <Col xs={8} xl={8} xxl={8}>
        <MarketPricing />
        {/** Temporary :::  START */}
        <BlogListHeader label="Decentralized System - Architecture and Infrastructure" />
        <BlogContent label="ds-ai" rows={3} />

        <BlogListHeader label="Smart Contracts" />
        <BlogContent label="smart-contracts" rows={2} />

        <BlogListHeader label="Smart Contracts - Languages" />
        <Pill mode="vertical" 
              layout={{
                  menu:{ xs:'2', sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
                  content:{  xs:'10', sm:'10', md:'10', lg:'10', xl:'10', xxl:'10' }
              }}
              menulinks={[
                  { id:'solidity', url:'#solidity', label:'Solidity', content:(<ScLSolidity />) },
                  { id:'vyper', url:'#vyper', label:'Vyper', content:(<ScLVyper />) },
                  { id:'rust', url:'#rust', label:'Rust', content:(<ScLRust />) }]} 
              activeId="solidity" 
              colorConfig={{
                  active: { color: '#000', backgroundColor: '#ccc' },
                  default: { color: '#666', backgroundColor: '' }
              }} />

        <BlogListHeader label="Zero Knowledge Proofs (ZKPs)" />
        <BlogContent label="zkp" rows={2} />
        {/** Temporary :::  END */}
      </Col>
      <Col xs={4} xl={4} xxl={4}>
        <MarketTrends/>
        <Terminologies title="Terminologies" prefix="tech/web3.0/terminologies/" data={Routes?.urls} />
        <Keywords data={KeywordData01} />
        <Keywords data={KeywordData02} />
        <Keywords data={KeywordData03} />
        <Keywords data={KeywordData04} />
        <Keywords data={KeywordData05} />
        <Keywords data={KeywordData06} />
      </Col>
    </Row>
    <Row>
      <Col xs={12} xl={12} xxl={12}>
      
        {/* <BlogListHeader label="Decentralized System - Architecture and Infrastructure" />
        <BlogContent label="ds-ai" rows={3} /> */}

      </Col>
    </Row>
    <Row>
        <Col xs={12} xl={8} xxl={8}>

          {/* <BlogListHeader label="Smart Contracts" />
          <BlogContent label="smart-contracts" rows={2} />

          <BlogListHeader label="Smart Contracts - Languages" />
          <Pill mode="vertical" 
              layout={{
                  menu:{ xs:'2', sm:'2', md:'2', lg:'2', xl:'2', xxl:'2' },
                  content:{  xs:'10', sm:'10', md:'10', lg:'10', xl:'10', xxl:'10' }
              }}
              menulinks={[
                  { id:'solidity', url:'#solidity', label:'Solidity', content:(<ScLSolidity />) },
                  { id:'vyper', url:'#vyper', label:'Vyper', content:(<ScLVyper />) },
                  { id:'rust', url:'#rust', label:'Rust', content:(<ScLRust />) }]} 
              activeId="solidity" 
              colorConfig={{
                  active: { color: '#000', backgroundColor: '#ccc' },
                  default: { color: '#666', backgroundColor: '' }
              }} />

          <BlogListHeader label="Zero Knowledge Proofs (ZKPs)" />
          <BlogContent label="zkp" rows={2} />
          */}
            
        </Col>
        <Col xs={12} xl={4} xxl={4}>
          
        </Col>
    </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default Web3;