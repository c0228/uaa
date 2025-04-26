import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';

const LegalNotice = () =>{
    return (<div className="mbot15p">
        <Header menulinks={HeaderMenu} />
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div>
                        <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Legal Notice</b></h2><hr/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8}></Col>
                <Col md={4}>
                    <div className="core-summary-title mtop15p"><b>LEGAL NOTICE - SUMMARY</b></div>
                    <div className="mtop15p">
                        <Card padding={15} backgroundColor="#f5f5f5">
                            <div>
                                <div align="center"><h5><b>What is Legal Notice?</b></h5></div>
                                <div className="blog-desc mtop5p">
                                Legal Notice summarizes the legal ownership of the site, trademarks, and other intellectual 
                                property details. It gives clarity on copyright and protects your legal rights as the site owner.  
                                </div>
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
        <Bottom />
    </div>);
};

export default LegalNotice; 