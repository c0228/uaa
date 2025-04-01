import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import Detection from "./components/detection/index.js";
import Prevention from "./components/prevention/index.js";
import GarbageCollectionTuning from "./components/garbage-collection-tuning/index.js";
import Conclusion from "./components/conclusion/index.js";

const MemoryLeakPrevent = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
  <ContainerFluid>
     <Row>
        <Col xxl={8} xl={8}>
            <BlogArticleHeader metaData={meta} />
            <Introduction />
            <Detection />
            <Prevention />
            <GarbageCollectionTuning />
            <Conclusion />
        </Col>
     </Row>
 </ContainerFluid>
 </div>);
};

export default MemoryLeakPrevent;