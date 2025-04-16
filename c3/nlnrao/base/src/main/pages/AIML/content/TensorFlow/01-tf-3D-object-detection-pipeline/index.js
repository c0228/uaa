import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import Step01 from "./components/step01/index.js";
import Step02 from "./components/step02/index.js";
import Conclusion from "./components/conclusion/index.js";

const TF3DObjectDetectionPipeline = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Step01 />
          <Step02 />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default TF3DObjectDetectionPipeline;