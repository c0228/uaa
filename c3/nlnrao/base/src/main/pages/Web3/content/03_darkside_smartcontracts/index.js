import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';

const DarkSideSmartContracts = ({ meta }) =>{
  return (<div>
  <Header menulinks={HeaderMenu} activeId="Blockchain" />
  <ContainerFluid>
    <Row>
     <Col xs={12} xl={8} xxl={8}>
      <div className="mbot60p">
        <BlogArticleHeader metaData={meta} />
      </div>
     </Col>
    </Row>
  </ContainerFluid>
 </div>);
};

export default DarkSideSmartContracts;