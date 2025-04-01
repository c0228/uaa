import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import Versions from "./components/versions/index.js";
import Conclusion from "./components/conclusion/index.js";

const JavaVersionsFeatureUpdates = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Versions />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default JavaVersionsFeatureUpdates;