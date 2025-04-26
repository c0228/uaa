import React from "react";
import { ContainerFluid, Row, Col, Card } from "e-ui-react";
import OrderList from "@MainComponents/order-list/index.js";
import Header from '@MainTemplates/Header/index.js';
import { HeaderMenu } from '@MainConfig/HeaderMenu.js';
import Bottom from '@MainTemplates/Bottom/index.js';

const UserAgreement = () =>{
 return (<div className="mbot15p">
    <Header menulinks={HeaderMenu} />
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div>
                    <hr/><h2 className="blog-head" style={{ paddingTop:'15px' }}><b>User Agreement</b></h2><hr/>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={8}></Col>
            <Col md={4}>
                <div className="core-summary-title mtop15p"><b>USER AGREEMENT - SUMMARY</b></div>
                <div className="mtop15p">
                    <Card padding={15} backgroundColor="#f5f5f5">
                        <div>
                            <div align="center"><h5><b>What is User Agreement?</b></h5></div>
                            <div className="blog-desc mtop5p">
                                User Agreement (or End-User License Agreement - EULA) is a contract between the 
                                website/app and the user that outlines the rules for using the service. It protects 
                                the website owner from legal issues and ensures the user follows the rules.
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

export default UserAgreement; 