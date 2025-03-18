import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import Knative from "./components/knative/index.js";
import OpenFaaS from "./components/open-faas/index.js";
import Conclusion from "./components/conclusion/index.js";

const DockerServerlessComputingSupport = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Knative />
          <OpenFaaS />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default DockerServerlessComputingSupport;