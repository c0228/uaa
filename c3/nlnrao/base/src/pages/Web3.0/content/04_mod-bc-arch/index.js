import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import CoreComponents from "./components/core-components/index.js";
import StepWorkflow from "./components/step-workflow/index.js";

const ModBcArch = () =>{
 const BreadcrumbPage = () =>{
  return (<div className="mtop15p mbot15p">
    <Breadcrumb backgroundColor={Colors.light} 
        data={[{ label:'Web 3.0', url:process.env.PROJECT_URL+'tech/web3.0/overview' },
            { label:'Design a modular blockchain architecture that separates the execution, consensus, and data layers', url:'#' }]} />
  </div>)
 };

 return (<div>
  <Header menulinks={HeaderMenu} activeId="Blockchain" />
    <ContainerFluid>
       <Row>
        <Col xs={12} xl={8} xxl={8}>
         <div className="mbot60p">
           <BreadcrumbPage />
           <BlogArticleHeader title="Design a modular blockchain architecture that separates the execution, consensus, and data layers" date="October 26, 2024" />
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