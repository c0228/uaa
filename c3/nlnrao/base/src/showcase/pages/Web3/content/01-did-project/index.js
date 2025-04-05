import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import { HeaderMenu } from '@ShowcaseConfig/HeaderMenu.js';
import Header from '@ShowcaseTemplates/Header/index.js';

const DIDProject = ({ meta }) =>{
 return (<div className="mbot15p"> 
   <Header menulinks={HeaderMenu} activeId="Blockchain" />
   <ContainerFluid>
           <Row>
               <Col md={8}>
                   <BlogArticleHeader metaData={meta} />
               </Col>
               <Col md={4}></Col>
           </Row>
    </ContainerFluid>
 </div>);
};

export default DIDProject;