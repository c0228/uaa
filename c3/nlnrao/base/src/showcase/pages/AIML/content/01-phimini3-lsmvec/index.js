import React from "react";
import { ContainerFluid, Row, Col, Badge, Card, Icon } from "e-ui-react";
import { HeaderMenu } from '@ShowcaseConfig/HeaderMenu.js';
import Header from '@ShowcaseTemplates/Header/index.js';
import Introduction from './components/Introduction/index.js';
import Architecture from './components/Architecture/index.js';

const PhiMiniLsmVec = ({ meta }) =>{
 const IconStatus = ({ is }) =><Icon type="FontAwesome" name={is?"fa-check":"fa-times"} color={is?"green":"red"} style={{ marginRight:'5px' }} />
 return (<div className="mbot15p lh28p fs16p"> 
   <Header menulinks={[]} />
   <ContainerFluid>
    <Row>
        <Col md={8}>
            <div><Badge type="primary" label={meta?.tag} size="12" style={{ marginRight:'5px' }} /></div>
            <div><h4 className="blog-head"><b>{meta?.label}</b></h4></div>
            <Introduction />
            <Architecture />
        </Col>
        <Col md={4}>
            <Card padding={15}>
                <div><h4 className="blog-head"><b>Strengths of this Design -</b></h4></div>
                <div className="padLeft15p">
                    {[(<span>Works <b>offline / air-gapped</b></span>),
                    (<span>Runs on <b>low RAM (4–8 GB)</b></span>),
                    (<span>Scales to <b>GBs/TBs of data</b></span>),
                    (<span>Ideal for <b>edge, desktop, enterprise private systems</b></span>),
                    (<span>Model-agnostic (can later swap Phi with another SLM)</span>),
                    (<span>Cost-efficient (no GPU, no cloud dependency)</span>),
                    ].map((data,index)=>{
                        return (<div key={index}><IconStatus is={true} /> {data}</div>);
                    })}
                </div>
            </Card>
        </Col>
    </Row>
   </ContainerFluid>
 </div>);
};

export default PhiMiniLsmVec;