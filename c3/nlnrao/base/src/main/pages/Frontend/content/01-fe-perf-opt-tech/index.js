import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import Footer from '@MainTemplates/Footer/index.js';
import Introduction from './components/introduction/index.js';
import GeneralWebPerformanceBestTechniques from './components/general-web-performance-best-practices/index.js';
import ReactPerformanceOptimizationTechniques from './components/performance-optimization-techniques-react/index.js';
import AngularPerformanceOptimizationTechniques from './components/performance-optimization-techniques-angular/index.js';
import VuePerformanceOptimizationTechniques from './components/performance-optimization-techniques-vue/index.js';
import PerformanceMeasurementTools from './components/performance-measurements-tools/index.js';
import Conclusion from './components/conclusion/index.js';

const FePerfOptTech = ({ meta }) =>{

     return (<div className="mbot15p">
      <Header menulinks={HeaderMenu} activeId="Home" />
       <ContainerFluid>
          <Row>
            <Col md={8}>
              <BlogArticleHeader metaData={meta} />
              <Introduction />
              <GeneralWebPerformanceBestTechniques />
              <ReactPerformanceOptimizationTechniques />
              <AngularPerformanceOptimizationTechniques />
              <VuePerformanceOptimizationTechniques />
              <PerformanceMeasurementTools />
              <Conclusion />
            </Col>
           </Row>
        </ContainerFluid>
        <Bottom />
        <Footer />
     </div>);
};

export default FePerfOptTech;