import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import Relationship from "./components/relationship/index.js";
import OneRunTimeAnother from "./components/one-runtime-another/index.js";
import Conclusion from './components/conclusion/index.js';

const OCI = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Relationship />
          <OneRunTimeAnother />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default OCI;