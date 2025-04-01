import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import MsgFormatEvolve from './components/msg-format-evolve/index.js';
import SerializationFormatsImpacts from './components/serialization-formats-impacts/index.js';
import SchemaEvolution from './components/schema-evolution/index.js';

const KafkaMessageFormat = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <MsgFormatEvolve />
          <SerializationFormatsImpacts />
          <SchemaEvolution />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default KafkaMessageFormat;