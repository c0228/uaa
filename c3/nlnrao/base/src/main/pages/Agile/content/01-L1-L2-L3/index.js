import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import L1Support from './components/l1-support/index.js';
import L2Support from './components/l2-support/index.js';
import L3Support from "./components/l3-support/index.js";
import Conclusion from "./components/conclusion/index.js";

const DefineL1L2L3 = ({ meta }) =>{

 return (<div className="mbot15p">
    <Header menulinks={HeaderMenu} activeId="Home" />
 <ContainerFluid>
    <Row>
        <Col xxl={8} xl={8}>
            <BlogArticleHeader metaData={meta} />
            <Introduction />
            <L1Support />
            <L2Support />
            <L3Support />
            <Conclusion />
        </Col>
        <Col all={4}>
        </Col>
    </Row>
 </ContainerFluid>
 </div>);
};

export default DefineL1L2L3;