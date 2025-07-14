import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Terminologies from '@MainComponents/terminologies-list/index.js';
import Routes from "@MainPages/Java/component.routes.json";

const DateAndTimeAPI = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
        </Col>
        <Col md={4}>
            <Terminologies title="Java 08 Features" isIndex={true} prefix="tech/java-08-features/" data={Routes?.urls} />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default DateAndTimeAPI;