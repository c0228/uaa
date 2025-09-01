import React, { useEffect } from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Terminologies from '@MainComponents/terminologies-list/index.js';
import Routes from "@MainPages/AIML/component.routes.json";
import Introduction from "./components/Introduction/index.js";
import GradientDescent from "./components/Gradient-Descent/index.js";
import Example from "./components/Example/index.js";
import Learnings from "./components/Learnings/index.js";
import Conclusion from "./components/Conclusion/index.js";
import './index.css';

const ArtificalNeuron = ({ meta }) =>{

 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <GradientDescent />
          <Example />
          <Learnings />
          <Conclusion />
        </Col>
        <Col md={4}>
            <Terminologies title="AI/ML Terminologies" isIndex={true} prefix="tech/aiml-terminologies/" data={Routes?.urls} />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default ArtificalNeuron;