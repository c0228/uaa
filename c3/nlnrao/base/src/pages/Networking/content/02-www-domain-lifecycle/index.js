import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';

const WWWDomainLifecycle = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default WWWDomainLifecycle;