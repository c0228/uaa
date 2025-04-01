import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import Authorization from "./components/authorization/index.js";
import AccessControl from "./components/access-control/index.js";
import SecureService from "./components/secure-service/index.js";

const SecurityDecentralization = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Authorization />
          <AccessControl />
          <SecureService />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default SecurityDecentralization;