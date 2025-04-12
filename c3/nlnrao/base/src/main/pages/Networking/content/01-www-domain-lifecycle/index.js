import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import Lifecycle from "./components/lifecycle/index.js";
import TechnicalAnatomy from "./components/technical-anatomy/index.js";
import Conclusion from "./components/conclusion/index.js";

const WWWDomainLifecycle = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Lifecycle />
          <TechnicalAnatomy />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default WWWDomainLifecycle;