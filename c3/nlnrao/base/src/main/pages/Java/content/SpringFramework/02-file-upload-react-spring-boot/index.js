import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import Backend from './components/backend/index.js';
import Frontend from "./components/frontend/index.js";
import Testing from "./components/testing/index.js";

const FileUploadReactSprintBoot = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Backend />
          <Frontend />
          <Testing />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default FileUploadReactSprintBoot;