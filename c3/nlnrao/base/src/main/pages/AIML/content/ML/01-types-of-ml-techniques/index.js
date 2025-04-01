import React from "react";
import { ContainerFluid, Row, Col } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from "./components/introduction/index.js";
import SupervisedLearning from "./components/supervised-learning/index.js";
import UnSupervisedLearning from "./components/unsupervised-learning/index.js";
import ReinforcementLearning from "./components/reinforcement-learning/index.js";
import Conclusion from "./components/conclusion/index.js";

const MLTechniques = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <SupervisedLearning />
          <UnSupervisedLearning />
          <ReinforcementLearning />
          <Conclusion />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default MLTechniques;