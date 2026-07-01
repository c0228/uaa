import React, { useState, createContext, useContext } from 'react';
import { Card, ContainerFluid, Row, Col } from "e-ui-react";
import FormLeftMenu from "./components/form-left-menu/index.js";
import FormPersonalInfo from "./components/form-personal-info/index.js"; 
import FormAcademics from "./components/form-academics/index.js";

const EligibilityContext = createContext();
export const getEligibilityContext = () => useContext(EligibilityContext);
const ExamEligibilityCalculator = () =>{
 const defaultEligibilityData = {
    leftMenuActiveId: "personal-information",
 };
 const [eligibilityContextData, updateEligibilityContextData] = useState(defaultEligibilityData);
 const setEligibilityContextData = (data) => {
  updateEligibilityContextData({ ...eligibilityContextData, ...data });
 };
 return (<EligibilityContext.Provider value={{ eligibilityContextData, setEligibilityContextData }}>
 <div id="upsc-eligibility-calculator" className="mtop15p">
    <Card padding={15} backgroundColor="#fde2e2">
    <div><h1 className="fw-bold" style={{ fontSize:'22px' }}>UPSC Exam Eligibility Calculator</h1></div>
    <div><p>Find all UPSC exams you're eligible for in just a few steps - based on age, qualification, category, 
        and reservation criteria.<br/> Then, start your preparation with confidence.</p></div>
    <div className="mtop15p">
    <ContainerFluid>
        <Row>
            <Col md={4}><FormLeftMenu /></Col> {/** activeId={leftMenuActiveId} */}
            <Col md={8}>
              {eligibilityContextData?.leftMenuActiveId==="personal-information" && (<FormPersonalInfo />)}
              {eligibilityContextData?.leftMenuActiveId==="edu-qualification" && (<FormAcademics />)}
            </Col>
        </Row>
    </ContainerFluid>
    </div>
 </Card>
 </div>
 </EligibilityContext.Provider>);
};

export default ExamEligibilityCalculator;