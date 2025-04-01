import React from "react";
import { ContainerFluid, Row, Col, Breadcrumb, Colors, Button, Select, Card, Switch } from "e-ui-react";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import BlogArticleHeader from '@MainComponents/blog-article-header/index.js';
import Introduction from './components/introduction/index.js';
import Containerize from './components/01-containerize/index.js';
import CreateDeployService from './components/02-create-deploy-service/index.js';
import ConfigEnv from './components/03-config-env/index.js';
import ScalingAutoHealing from './components/04-scaling-auto-healing/index.js';
import LogMonitorHelm from './components/05-log-monitor-helm/index.js';

const StrategiesMsKubernetes = ({ meta }) =>{
 return (<div className="mbot15p">
  <Header menulinks={HeaderMenu} activeId="Home" />
   <ContainerFluid>
      <Row>
        <Col md={8}>
          <BlogArticleHeader metaData={meta} />
          <Introduction />
          <Containerize />
          <CreateDeployService />
          <ConfigEnv />
          <ScalingAutoHealing />
          <LogMonitorHelm />
        </Col>
       </Row>
    </ContainerFluid>
 </div>);
};

export default StrategiesMsKubernetes;