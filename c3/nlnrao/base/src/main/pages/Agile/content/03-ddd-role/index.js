import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import DDDToRole from "./components/ddd-to-agile/index.js";
import Conclusion from './components/conclusion/index.js';

const DDDRole = ({ meta }) =>{
 useEffect(()=>{ window.scrollTo({ top: 0, behavior: 'smooth' }); },[]); // Smooth scroll to top
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
  <ContainerFluid>
    <Row>
        <Col xxl={8} xl={8}>
            <BlogArticleHeader metaData={meta} />
            <Introduction />
            <DDDToRole />
            <Conclusion />
        </Col>
    </Row>
    </ContainerFluid>
 </div>);
};

export default DDDRole;