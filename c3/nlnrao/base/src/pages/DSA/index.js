import React, { useEffect } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col } from "e-ui-react";
import BlogListHeader from '@Components/blog-list-header/index.js';
import DSAIntroduction from "./components/home/dsa-introduction/index.js";
import DsDcbn from "./components/home/ds-dcbn/index.js";
import ADcbn from "./components/home/a-dcbn/index.js";
import CacheEvictionStrategies from "./components/home/cache-eviction-strategies/index.js";
import DSATerminologies from "./components/home/terminologies/index.js";
import SystemDesignAlgo from "./components/home/system-design-algo/index.js";
import LoadBalancingAlgorithms from "./components/home/load-balance-algo/index.js";
import DistSysAlgo from "./components/home/dist-sys-algo/index.js";

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
            <DSATerminologies />
            <SystemDesignAlgo />
            <LoadBalancingAlgorithms />
            <DistSysAlgo />
        </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default DSA;