import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import Integer from './components/01-integers/index.js';

const SolidityVariables = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Blockchain" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Integer />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default SolidityVariables;