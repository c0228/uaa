import React from "react";
import { ContainerFluid, Row, Col, TextBox, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import OrderList from "@Components/order-list/index.js";
import BlogListHeader from '@Components/blog-list-header/index.js'; 
import BlogItems from '@Components/blog-items/index.js'; 
import BlogData from '@StaticData/web3.0/overview.json';
import Terminologies from '@Components/terminologies-list/index.js';
import TerminologiesData from "@StaticData/web3.0/terminologies.json";
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

          <BlogListHeader label="Zero Knowledge Proofs (ZKPs)" />
          <BlogContent label="zkp" rows={2} />
            
        </Col>
        <Col xs={12} xl={4} xxl={4}>
          <Terminologies data={TerminologiesData} />
        </Col>
    </Row>
 </ContainerFluid>
 </div>
 </>);
};

export default Web3;