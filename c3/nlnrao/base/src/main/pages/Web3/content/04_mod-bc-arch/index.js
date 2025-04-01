import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import CoreComponents from "./components/core-components/index.js";
import StepWorkflow from "./components/step-workflow/index.js";

const ModBcArch = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Blockchain" />
    <ContainerFluid>
       <Row>
        <Col xs={12} xl={8} xxl={8}>
         <div className="mbot60p">
           <BlogArticleHeader metaData={meta} />
           <Introduction />
           <CoreComponents />
           <StepWorkflow />
         </div>
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default ModBcArch;