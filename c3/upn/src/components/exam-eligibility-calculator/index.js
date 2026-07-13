import React, { useState, createContext, useContext } from "react";
import { Card, ContainerFluid, Row, Col } from "e-ui-react";
import Menus from "./components/form-menus/index.js";
import PersonalInfo from "./components/step-01-personal-info/index.js";
import Academics from "./components/step-02-academics/index.js";
import Relaxations from "./components/step-03-relaxations/index.js";
import Review from "./components/step-04-review/index.js";

const LeftMenuData = [{ "id":"personal-information", "label":"Personal Information" },
                    { "id":"edu-qualification", "label":"Education Qualification" },
                    { "id":"reservation-and-relaxations", "label":"Reservation & Relaxations" },
                    { "id":"review", "label":"Review Details" }];                
const EligibilityContext = createContext();
export const getEligibilityContext = () => useContext(EligibilityContext);
const ExamEligibilityCalculator = () =>{
 const defaultEligibilityCalculator = {
    activeMenuId: "personal-information"
 };
 const [eligibilityContextData, updateEligibilityContextData] = useState(defaultEligibilityCalculator);
 const setEligibilityContextData = (data) => updateEligibilityContextData({ ...eligibilityContextData, ...data });
 return (<EligibilityContext.Provider value={{ eligibilityContextData, setEligibilityContextData }}>
 <div id="upsc-eligibility-calculator" className="mtop15p">
    <Card padding={15} backgroundColor="#fde2e2">
        <div><h1 className="fw-bold" style={{ fontSize:'22px' }}>UPSC Exam Eligibility Calculator</h1></div>
        <div><p>Find all UPSC exams you're eligible for in just a few steps - based on age, qualification, category, 
         and reservation criteria.<br/> Then, start your preparation with confidence.</p></div>
        <Row>
            <Col md={4}>
                <Menus data={LeftMenuData} />
            </Col>
            <Col md={8}>
                {eligibilityContextData?.activeMenuId === LeftMenuData?.[0]?.id && (<PersonalInfo data={LeftMenuData?.[0]} />)}
                {eligibilityContextData?.activeMenuId === LeftMenuData?.[1]?.id && (<Academics data={LeftMenuData?.[1]} />)}
                {eligibilityContextData?.activeMenuId === LeftMenuData?.[2]?.id && (<Relaxations data={LeftMenuData?.[2]} />)}
                {eligibilityContextData?.activeMenuId === LeftMenuData?.[3]?.id && (<Review data={LeftMenuData?.[3]} />)}
            </Col>
        </Row>
    </Card>
 </div>
 </EligibilityContext.Provider>);
};

export default ExamEligibilityCalculator;