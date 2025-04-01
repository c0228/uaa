import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import TriggerServerless from "./components/trigger-serverless/index.js";
import Conclusion from "./components/conclusion/index.js";

const KafkaIntegratingServerlessPlatformChallenges = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <TriggerServerless />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default KafkaIntegratingServerlessPlatformChallenges;