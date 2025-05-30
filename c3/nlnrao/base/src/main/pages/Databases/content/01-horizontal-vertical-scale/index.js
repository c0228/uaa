import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import DatabaseScaling from "./components/01-database-scaling/index.js";
import Conclusion from "./components/conclusion/index.js";

const HorizontalVerticalScale = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <DatabaseScaling />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default HorizontalVerticalScale;