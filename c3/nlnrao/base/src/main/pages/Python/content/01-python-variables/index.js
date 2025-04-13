import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import DataTypes from "./components/data-types/index.js";
import DynamicStaticTyping from "./components/dynamic-static-typing/index.js";
import Others from "./components/others/index.js";
import Conclusion from "./components/conclusion/index.js";

const PythonVariables = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <DataTypes />
          <DynamicStaticTyping />
          <Others />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default PythonVariables;