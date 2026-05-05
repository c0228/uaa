import React from "react";
import { ContainerFluid, Row, Col, Badge, Card, Icon } from "e-ui-react";
import { HeaderMenu } from '@ShowcaseConfig/HeaderMenu.js';
import Header from '@ShowcaseTemplates/Header/index.js';
import Introduction from './components/Introduction/index.js';
import Architecture from './components/Architecture/index.js';
import Processes from './components/Processes/index.js';
import SupportInfo from './components/SupportInfo/index.js';

const PhiMiniLsmVec = ({ meta }) =>{
 return (<div className="mbot15p lh28p fs16p"> 
   <Header menulinks={[]} />
   <ContainerFluid>
    <Row>
        <Col md={8}>
            <div><Badge type="primary" label={meta?.tag} size="12" style={{ marginRight:'5px' }} /></div>
            <div><h3 className="blog-head"><b>{meta?.label}</b></h3></div>
            <Introduction />
            <Architecture />
            <Processes />
        </Col>
        <Col md={4}>
            <SupportInfo />
        </Col>
    </Row>
   </ContainerFluid>
 </div>);
};

export default PhiMiniLsmVec;