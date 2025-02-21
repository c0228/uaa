import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@Config/HeaderMenu.js';
import BlogArticleHeader from '@Components/blog-article-header/index.js';

const MemoryLeakPrevent = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
  <ContainerFluid>
     <Row>
        <Col xxl={8} xl={8}>
            <BlogArticleHeader metaData={meta} />
        </Col>
     </Row>
 </ContainerFluid>
 </div>);
};

export default MemoryLeakPrevent;