import React, { useState } from "react";
import { Card, ContainerFluid, Row, Col } from "e-ui-react";
import FormLeftMenu from "./components/form-left-menu/index.js";
import FormPersonalInfo from "./components/form-personal-info/index.js"; 

const ExamEligibilityCalculator = () =>{
 const [leftMenuActiveId,setLeftMenuActiveId] = useState("personal-information");
 return (<div className="mtop15p">
    <Card padding={15} backgroundColor="#fde2e2">
    <div><h1 className="fw-bold" style={{ fontSize:'22px' }}>UPSC Exam Eligibility Calculator</h1></div>
    <div><p>Find all UPSC exams you're eligible for in just a few steps - based on age, qualification, category, 
        and reservation criteria.<br/> Then, start your preparation with confidence.</p></div>
    <div className="mtop15p">
    <ContainerFluid>
        <Row>
            <Col md={4}><FormLeftMenu activeId={leftMenuActiveId} /></Col>
            <Col md={8}>
              {leftMenuActiveId==="personal-information" && (<FormPersonalInfo />)}
            </Col>
        </Row>
    </ContainerFluid>
    </div>
 </Card>
 </div>);
};

export default ExamEligibilityCalculator;