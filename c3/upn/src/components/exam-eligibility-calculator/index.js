import React, { useState, createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, ContainerFluid, Row, Col } from "e-ui-react";
import Menus from "./components/form-menus/index.js";
import PersonalInfo from "./components/step-01-personal-info/index.js";
import Academics from "./components/step-02-academics/index.js";
import Relaxations from "./components/step-03-relaxations/index.js";
import Review from "./components/step-04-review/index.js";
import { DefaultEligibilityCalculator, EligibilityCalculatorData } from "./data.js";
                
const EligibilityContext = createContext();
export const getEligibilityContext = () => useContext(EligibilityContext);
const ExamEligibilityCalculator = () =>{
 const { lang } = useParams();
 const [eligibilityContextData, updateEligibilityContextData] = useState(DefaultEligibilityCalculator);
 const setEligibilityContextData = (data) => updateEligibilityContextData({ ...eligibilityContextData, ...data });
 return (<EligibilityContext.Provider value={{ eligibilityContextData, setEligibilityContextData }}>
 <div id="upsc-eligibility-calculator" className="mtop15p">
    <Card padding={15} backgroundColor="#fde2e2">
        <div><h1 className="fw-bold" style={{ fontSize:'22px' }}>{EligibilityCalculatorData?.[lang+"Title"]}</h1></div>
        <div>{EligibilityCalculatorData?.[lang+"Desc"]}</div>
        <Row>
            <Col md={4}><Menus data={EligibilityCalculatorData?.leftMenuData} /></Col>
            <Col md={8}>
                {eligibilityContextData?.activeMenuId === EligibilityCalculatorData?.leftMenuData?.[0]?.id && 
                    (<PersonalInfo data={EligibilityCalculatorData?.leftMenuData?.[0]} />)}
                {eligibilityContextData?.activeMenuId === EligibilityCalculatorData?.leftMenuData?.[1]?.id && 
                    (<Academics data={EligibilityCalculatorData?.leftMenuData?.[1]} />)}
                {eligibilityContextData?.activeMenuId === EligibilityCalculatorData?.leftMenuData?.[2]?.id && 
                    (<Relaxations data={EligibilityCalculatorData?.leftMenuData?.[2]} />)}
                {eligibilityContextData?.activeMenuId === EligibilityCalculatorData?.leftMenuData?.[3]?.id && 
                    (<Review sections={EligibilityCalculatorData?.leftMenuData}  />)}
            </Col>
        </Row>
    </Card>
 </div>
 </EligibilityContext.Provider>);
};

export default ExamEligibilityCalculator;