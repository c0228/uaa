import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';

const Accessibility = () =>{
    return (<div className="mbot15p">
        <Header menulinks={HeaderMenu} />
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div>
                        <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>Accessibility</b></h2><hr/>
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
                    <div className="core-summary-title mtop15p"><b>ACCESSIBILITY - SUMMARY</b></div>
                    <div className="mtop15p">
                        <Card padding={15} backgroundColor="#f5f5f5">
                            <div>
                                <div align="center"><h5><b>What is Accessibility?</b></h5></div>
                                <div className="blog-desc mtop5p">
                                    Accessibility describes how the website makes content accessible to people with 
                                    disabilities. It encourages inclusion and is required by some laws like the ADA (Americans 
                                    with Disabilities Act).
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

export default Accessibility; 