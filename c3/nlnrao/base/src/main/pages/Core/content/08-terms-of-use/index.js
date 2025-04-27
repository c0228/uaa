import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';

const TermsOfUse = () =>{
    return (<div className="mbot15p">
        <Header menulinks={HeaderMenu} />
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div>
                        <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Terms of Use</b></h2><hr/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    <div className="blog-desc mbot35p">
                        <div className="mtop15p">
                            <div><b><i>Last Updated:</i></b> April 26, 2025</div>
                        </div>
                        <div className="mtop15p"><h4>Welcome to <b>nellutlalnrao.com</b>!</h4></div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="core-summary-title mtop15p"><b>TERMS OF USE - SUMMARY</b></div>
                    <div className="mtop15p">
                        <Card padding={15} backgroundColor="#f5f5f5">
                            <div>
                                <div align="center"><h5><b>What are Terms of Use?</b></h5></div>
                                <div className="blog-desc mtop5p">
                                Terms of Use is similar to Terms & Conditions; it outlines how users are allowed to interact with 
                                the site and its content. It prevents misuse of services, sets clear expectations, and supports 
                                legal enforcement if terms are broken.
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

export default TermsOfUse; 