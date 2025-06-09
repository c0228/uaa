import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import DSANotations from '@MainPages/DSA/components/home/dsa-notations/index.js';

const KMPAlgorithm = ({ meta }) =>{
  return (<div>
  <Header menulinks={HeaderMenu} activeId="DSA" />
  <ContainerFluid>
    <Row>
      <Col md={8}>
        <BlogArticleHeader metaData={meta} />
      </Col>
      <Col md={4}>
        <DSANotations />
      </Col>
    </Row>
  </ContainerFluid>
  </div>);
};

export default KMPAlgorithm;