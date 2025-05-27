import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Bottom from '@MainTemplates/Bottom/index.js';
import Footer from '@MainTemplates/Footer/index.js';

const PrometheusAndGrafana = ({ meta }) =>{

     return (<div className="mbot15p">
      <Header menulinks={HeaderMenu} activeId="Home" />
       <ContainerFluid>
          <Row>
            <Col md={8}>
              <BlogArticleHeader metaData={meta} />
            </Col>
           </Row>
        </ContainerFluid>
        <Bottom />
        <Footer />
     </div>);
};

export default PrometheusAndGrafana;