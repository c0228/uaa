import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import CacheObliviousDS from "./components/cache-oblivious-ds/index.js";
import Conclusion from "./components/conclusion/index.js";

const CacheObliviousAlgorithms = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <CacheObliviousDS />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default CacheObliviousAlgorithms;