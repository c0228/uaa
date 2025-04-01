import React, { useEffect } from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import WebBrowserWorks from "./components/web-browser-works/index.js";
import NodeJsWorks from "./components/node-js-works/index.js";
import Conclusion from "./components/conclusion/index.js";

const V8Node = ({ meta }) =>{
 return (<div className="mbot15p">
 <Header menulinks={HeaderMenu} activeId="Home" />
 <ContainerFluid>
    <Row>
        <Col xxl={8} xl={8}>
            <BlogArticleHeader metaData={meta} />
            <Introduction />
            <WebBrowserWorks />
            <NodeJsWorks />
            <Conclusion />
        </Col>
    </Row>
    </ContainerFluid>
 </div>);
};

export default V8Node;