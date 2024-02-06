import React from "react";
import Header from "./../../commons/header.js";
import { Card, ContainerFluid, Col, Row, TextBox, Button, TextArea } from "e-ui-react";

const ContactInformation = ()=>{
 return (<>
 <ContainerFluid>
    <div className="bs-profile-table mbot15p">
    <Card className="intro" padding={15} borderRadius={10}>
    <Header title="3. Contact Information" />
    <div className="bs-profile-contents mtop15p">
        <Row>
            <Col>
                <div className="mbot15p">
                    <TextArea name="address" label="Address" placeholder="Enter your Address" lines={3} />
                </div>
            </Col>
            <Col xl={6} xxl={6}>
            <div className="mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="country" label="Country" placeholder="Enter your Country" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="location" label="Location" placeholder="Enter the Location" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="mobileNo" label="Mobile Number" placeholder="Enter the Mobile Number" />
                </div>
            </Col>
            <Col xl={6} xxl={6}>
                <div className="mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="state" label="State" placeholder="Enter your State" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="locality" label="Locality" placeholder="Enter your Locality" />
                </div>
            </Col>
        </Row>
        </div>
        <Row>
            <Col>
            <div className="mtop15p mbot15p input-group" align="center">
                <Button type="danger" label="Back" size={11} />
                <Button type="primary" label="Next" size={11} />
            </div>
            </Col>
        </Row>
    </Card>
    </div>
    </ContainerFluid>
 </>);
};

export default ContactInformation;