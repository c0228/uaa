import React, { useEffect } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import CacheEvictionStrategies from "./components/cache-eviction-strategies/index.js";
import SystemDesignAlgo from "./components/system-design-algo/index.js";
import BlogListHeader from '@Components/blog-list-header/index.js';
import DSAIntroduction from "./components/dsa-introduction/index.js";
import DsDcbn from "./components/ds-dcbn/index.js";
import ADcbn from "./components/a-dcbn/index.js";

const DSA = () =>{
 useEffect(()=>{
  document.body.style.backgroundColor='#fff';
 },[]);

 return (<div>
  <Header menulinks={HeaderMenu} activeId="DSA" />
  <ContainerFluid>
    <Row>
        <Col xl={8} xxl={8}>
           <BlogListHeader label="Data Structures and Algorithms (DSA) - Introduction" />
           <DSAIntroduction />
           <BlogListHeader label="Data Structures - DeFi, Crypto, Blockchain and NFTs" />
           <DsDcbn />
           <BlogListHeader label="Algorithms - DeFi, Crypto, Blockchain and NFTs" />
           <ADcbn />
        </Col>
        <Col xl={4} xxl={4}>
            <CacheEvictionStrategies />
            <SystemDesignAlgo />
        </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default DSA;