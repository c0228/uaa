import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';

const Web3BlockchainRoadMap = ({ meta }) =>{
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

export default Web3BlockchainRoadMap;