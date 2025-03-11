import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import Step01 from './components/step-01/index.js';
import Step02 from './components/step-02/index.js';
import Step03 from './components/step-03/index.js';

const EurekaClient = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Step01 />
          <Step02 />
          <Step03 />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default EurekaClient;