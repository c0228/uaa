import React from "react";
import { ContainerFluid, Row, Col, Highlight } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import Buffers from "./components/buffers/index.js";
import Roles from "./components/roles/index.js";
import Conclusion from "./components/conclusion/index.js";

const BufferClasses = ({ meta }) =>{
 return (<div>
 <Header menulinks={HeaderMenu} activeId="Home" />
 <ContainerFluid>
    <Row>
        <Col xxl={8} xl={8}>
            <BlogArticleHeader metaData={meta} />
            <Introduction />
            <Buffers />
            <Roles />
            <Conclusion />
        </Col>
    </Row>
</ContainerFluid>
</div>);
};

export default BufferClasses;