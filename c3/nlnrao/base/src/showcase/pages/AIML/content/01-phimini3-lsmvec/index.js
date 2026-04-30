import React from "react";
import { ContainerFluid, Row, Col, Badge } from "e-ui-react";
import { HeaderMenu } from '@ShowcaseConfig/HeaderMenu.js';
import Header from '@ShowcaseTemplates/Header/index.js';

const PhiMiniLsmVec = ({ meta }) =>{
 return (<div className="mbot15p lh28p fs16p"> 
   <Header menulinks={[]} />
   <ContainerFluid>
    <Row>
        <Col md={8}>
            <div><Badge type="primary" label={meta?.tag} size="12" style={{ marginRight:'5px' }} /></div>
            <div><h4 className="blog-head"><b>{meta?.label}</b></h4></div>
        </Col>
    </Row>
   </ContainerFluid>
 </div>);
};

export default PhiMiniLsmVec;