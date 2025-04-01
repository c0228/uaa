import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import Security from './components/01-security/index.js';
import Integration from './components/02-integration/index.js';
import Monitoring from './components/03-monitoring/index.js';

const IntegrateSecurityTesting = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Security />
          <Integration />
          <Monitoring />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default IntegrateSecurityTesting;