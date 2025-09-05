import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Terminologies from '@MainComponents/terminologies-list/index.js';
import RelatedArticlesList from '@MainComponents/related-articles-list/index.js';
import Routes from "@MainPages/AIML/component.routes.json";
import Introduction from "./components/Introduction/index.js";
import Conclusion from "./components/Conclusion/index.js";

const LargeLanguageModels = ({ meta }) =>{

 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Conclusion />
        </Col>
        <Col md={4}>
            <Terminologies title="AI Basics" isIndex={true} prefix="tech/aiml-basics/" data={Routes?.urls} />
            <Terminologies title="AI Terminologies" prefix="tech/aiml-terminologies/" data={Routes?.urls} />
            <RelatedArticlesList title="Related Articles" list={["tech/aiml/hardwares/cpu-vs-gpu-vs-tpu"]} data={Routes?.urls} />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default LargeLanguageModels;