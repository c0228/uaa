import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import DSANotations from '@MainPages/DSA/components/home/dsa-notations/index.js';
import Introduction from './components/introduction/index.js';
import Example from "./components/example/index.js";
import VisualRep from './components/VisualRep/index.js';
import Others from './components/others/index.js';
import Conclusion from "./components/conclusion/index.js";

const QuickSort = ({ meta }) =>{
  return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="DSA" />
  <ContainerFluid>
    <Row>
      <Col md={8}>
        <BlogArticleHeader metaData={meta} />
        <Introduction />
        <Example />
        <VisualRep />
        <Others />
        <Conclusion />
      </Col>
      <Col md={4}>
        <DSANotations />
      </Col>
    </Row>
  </ContainerFluid>
  </div>);
};

export default QuickSort;