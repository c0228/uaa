import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import DistSysAlgo from "@MainPages/DSA/components/home/dist-sys-algo/index.js";
import DSANotations from '@MainPages/DSA/components/home/dsa-notations/index.js';
import CacheEvictionStrategies from "@MainPages/DSA/components/home/cache-eviction-strategies/index.js";
import Introduction from "./components/introduction/index.js";
import Practical from "./components/practical/index.js";
import Conclusion from "./components/conclusion/index.js";

const ByzantineFaultTolerance = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="DSA" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Practical />
          <Conclusion />
        </Col>
        <Col md={4}>
          <DistSysAlgo />
          <DSANotations />
          <CacheEvictionStrategies />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default ByzantineFaultTolerance;