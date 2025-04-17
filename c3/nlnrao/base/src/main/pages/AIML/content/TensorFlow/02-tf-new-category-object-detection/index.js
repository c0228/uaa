import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import Implementation from "./components/implementation/index.js";
import Limitations from "./components/limitations/index.js";
import Conclusion from "./components/conclusion/index.js";

const TFNewCategoryObjectDetection = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Implementation />
          <Limitations />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default TFNewCategoryObjectDetection;