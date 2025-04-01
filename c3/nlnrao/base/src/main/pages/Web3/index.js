import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import { Pill, Colors } from 'e-ui-react';
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import OrderList from "@Components/order-list/index.js";
import BlogListHeader from '@Components/blog-list-header/index.js'; 
import BlogItems from '@Components/blog-items/index.js'; 
import BlogData from '@StaticData/web3/overview.json';
import Terminologies from '@Components/terminologies-list/index.js';
import Routes from "./component.routes.json";
import ScLSolidity from "./smart-contracts/sc-l-solidity/index.js";
import ScLVyper from "./smart-contracts/sc-l-vyper/index.js";
import ScLRust from "./smart-contracts/sc-l-rust/index.js";
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
    <Row>
      <Col xs={12} xl={12} xxl={12}>
      
        <BlogListHeader label="Decentralized System - Architecture and Infrastructure" />
        <BlogContent label="ds-ai" rows={3} />

      </Col>
    </Row>
    <Row>
        <Col xs={12} xl={8} xxl={8}>

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
            
        </Col>
        <Col xs={12} xl={4} xxl={4}>
          <Terminologies title="Terminologies" prefix="tech/web3.0/terminologies/" data={Routes?.urls} />
        </Col>
    </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default Web3;