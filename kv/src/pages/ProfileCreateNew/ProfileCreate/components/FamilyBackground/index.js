import React from "react";
import Header from "./../../commons/header.js";
import { Card, ContainerFluid, Col, Row, TextBox, Button } from "e-ui-react";

const FamilyBackground = ()=>{
 return (<>
 <ContainerFluid>
    <div className="bs-profile-table mbot15p">
    <Card className="intro" padding={15} borderRadius={10}>
    <Header title="4. Family Background" />
    <div className="bs-profile-contents mtop15p">
        <Row>
            <Col xl={6} xxl={6}>
                <div className="mbot15p" style={{ color:"black" }} align="center">
                        <h5 style={{fontFamily:"fantasy"}}>FATHER DETAILS</h5>
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="fatherName" label="Father Name" placeholder="Enter your Father Name" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="fatherOccupation" label="Occupication" placeholder="Enter Occupation" />
                </div>
                <div className="mtop25p mbot15p" style={{marginBottom:"8px", color:"black"}} align="center">
                        <h5 style={{fontFamily:"fantasy"}}>SIBLINGS DETAILS</h5>
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="brotherName" label="Number of Brothers" placeholder="Enter number of brothers" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="sisterName" label="Number of Sisters" placeholder="Enter number of sisters" />
                </div>
            </Col>
            <Col xl={6} xxl={6}>
                <div className="mbot15p" style={{ color:"black" }} align="center">
                        <h5 style={{fontFamily:"fantasy"}}>MOTHER DETAILS</h5>
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="motherName" label="Mother Name" placeholder="Enter your Mother Name" />
                </div>
                <div className="mtop15p mbot15p" style={{marginBottom:"8px"}}>
                        <TextBox name="motherOccupation" label="Occupation" placeholder="Enter Occupation" />
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

export default FamilyBackground;