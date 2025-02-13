import React, { useEffect } from "react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import CacheEvictionStrategies from "./components/cache-eviction-strategies/index.js";
import SystemDesignAlgo from "./components/system-design-algo/index.js";
import BlogListHeader from '@Components/blog-list-header/index.js';
import SortingAlgorithm from "./components/ds-algorithms/sorting-algorithms.js";

const DSA = () =>{
 useEffect(()=>{
  document.body.style.backgroundColor='#fff';
 },[]);

 const SearchingAlgorithm = () =>{
  return (<Card>
    <div align="center" className="mtop15p"><h4><b>Searching Algorithms</b></h4></div>
    <div className="pad15p" style={{ lineHeight:'26px' }}>

      <div>Searching algorithms find an element in a given data structure.</div>

      <div className="mtop15p">
        <b>Linear Search –</b> Iterates through the array to find the element.
      </div>

      <div className="mtop15p">
        <b>Binary Search –</b> Searches in a sorted array by dividing it into halves.
      </div>

      <div className="mtop15p">
        <b>Jump Search –</b> Jumps ahead by fixed steps and then performs linear search.
      </div>

      <div className="mtop15p">
        <b>Interpolation Search –</b> Similar to binary search but estimates position dynamically.
      </div>

      <div className="mtop15p">
        <b>Exponential Search –</b> Used for unbounded or infinite arrays.
      </div>

    </div>
    </Card>);
 };

 return (<div>
  <Header menulinks={HeaderMenu} activeId="DSA" />
  <ContainerFluid>
    <Row>
        <Col xl={8} xxl={8}>
           <BlogListHeader label="Data Structures and Algorithms (DSA)" />
           <Row>
            <Col xl={6} xxl={6}>
              <SortingAlgorithm />
            </Col>
            <Col xl={6} xxl={6}>
              <SearchingAlgorithm />
            </Col>
           </Row>
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