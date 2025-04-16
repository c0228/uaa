import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import Propagation from "./components/propagation/index.js";
import Isolation from "./components/isolation/index.js";
import Action from "./components/action/index.js";
import Conclusion from "./components/conclusion/index.js";

const TransactionIsloationPropagation = ({ meta }) =>{
 return (<div>
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Propagation />
          <Isolation />
          <Action />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default TransactionIsloationPropagation;