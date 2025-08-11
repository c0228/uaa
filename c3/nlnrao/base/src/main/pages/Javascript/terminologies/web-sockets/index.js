import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Terminologies from '@MainComponents/terminologies-list/index.js';
import JSRoutes from "@MainPages/Javascript/component.routes.json";

const WebSockets = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
        </Col>
        <Col md={4}>
            <Terminologies title="Javascript Terminologies" prefix="tech/javascript/terminologies/" data={JSRoutes?.urls} />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default WebSockets;