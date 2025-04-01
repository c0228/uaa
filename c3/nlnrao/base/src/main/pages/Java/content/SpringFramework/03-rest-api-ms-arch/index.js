import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import Implementation from './components/implementation/index.js';
import ServiceDiscovery from './components/service-discovery/index.js';
import APIGateway from './components/api-gateway/index.js';
import SecureMonitorMS from './components/secure-monitor-ms/index.js';

const RestApiMsArch = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Implementation />
          <ServiceDiscovery />
          <APIGateway />
          <SecureMonitorMS />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default RestApiMsArch;