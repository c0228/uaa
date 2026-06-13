import React, { useState } from "react";
import { useParams  } from "react-router-dom";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import Header from '@Templates/Header/index.js';
import { HeaderMenu } from '@AppRoutes/NavbarList.js';
import Introduction from './components/introduction/index.js';
import WhyChoose from './components/why-choose/index.js';
import StartJourney from './components/start-journey/index.js';
import UPSCStructure from './components/upsc-structure/index.js';

const AboutUPSC = () =>{
 const { lang } = useParams();
 return (<div className="fs22p">
    <Header menulinks={HeaderMenu(lang)} activeId="AboutUPSC" />
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div>
                    <div style={{ borderTop:'1px solid #ccc', borderBottom:'1px solid #ccc', paddingTop:'10px' }}>
                        <h1><b>
                            {lang=='en' && (<div>Union Public Service Commission (UPSC)</div>)}
                            {lang=='hi' && (<div>संघ लोक सेवा आयोग (यूपीएससी)</div>)}
                        </b></h1>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
                <Introduction />
                <WhyChoose />
                <StartJourney />
            </Col>
            <Col md={6}>
                <UPSCStructure />
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default AboutUPSC;