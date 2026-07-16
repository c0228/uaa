import React, { useState, createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, ContainerFluid, Row, Col } from "e-ui-react";
import Menus from "./components/form-menus/index.js";
import PersonalInfo from "./components/step-01-personal-info/index.js";
import Academics from "./components/step-02-academics/index.js";
import Relaxations from "./components/step-03-relaxations/index.js";
import Review from "./components/step-04-review/index.js";

const CalculatorData = {
 "enTitle": "UPSC Exam Eligibility Calculator",
 "hiTitle": "यूपीएससी परीक्षा पात्रता कैलकुलेटर",
 "enDesc": (<p>Find all UPSC exams you're eligible for in just a few steps - based on age, qualification, category, 
         and reservation criteria.<br/> Then, start your preparation with confidence.</p>),
 "hiDesc": (<p>उम्र, योग्यता, कैटेगरी और आरक्षण के आधार पर, बस कुछ ही स्टेप्स में उन सभी यूपीएससी परीक्षाओं का पता लगाएं जिनके लिए आप योग्य हैं।
        <br/> फिर, आत्मविश्वास के साथ अपनी तैयारी शुरू करें।</p>),
 "leftMenuData":[{  "id":"personalInfo", "enLabel":"Personal Information", "hiLabel":"व्यक्तिगत जानकारी" },
            { "id":"academics", "enLabel":"Education Qualification", "hiLabel":"शैक्षिक योग्यता" },
            { "id":"reservations", "enLabel":"Reservation & Relaxations", "hiLabel":"आरक्षण और छूट" },
            { "id":"review", "enLabel":"Review Details", "hiLabel":"समीक्षा का विवरण" }]
};                
const EligibilityContext = createContext();
export const getEligibilityContext = () => useContext(EligibilityContext);
const ExamEligibilityCalculator = () =>{
 const { lang } = useParams();
 const defaultEligibilityCalculator = {
    // "activeMenuId": "personalInfo",
    "activeMenuId": "reservations",
    "data":{
        "personalInfo": {
            "fullName": "Nellutla L N Rao",
            "dob": "2012-07-15",
            "gender": "Male",
            "nationality": "Indian",
            "category": "General (Unreserved / UR)"
        },
        "academics":{
            "highestQualification": "12th Pass/ Intermediate"
        },
        "reservations":{
            "pwBD": "Yes",
            "disabilityCategory": "Blindness / Low Vision",
            "disabilityPercentage": 40,
            "exServiceMan": "Yes",
            "defencePersonnelDisabled": "Yes",
            "cseAttempt": "Yes",
            "cseAttemptsUsed":"3"
        }
    }
 };
 const [eligibilityContextData, updateEligibilityContextData] = useState(defaultEligibilityCalculator);
 const setEligibilityContextData = (data) => updateEligibilityContextData({ ...eligibilityContextData, ...data });
 return (<EligibilityContext.Provider value={{ eligibilityContextData, setEligibilityContextData }}>
 <div id="upsc-eligibility-calculator" className="mtop15p">
    <Card padding={15} backgroundColor="#fde2e2">
        <div><h1 className="fw-bold" style={{ fontSize:'22px' }}>{CalculatorData?.[lang+"Title"]}</h1></div>
        <div>{CalculatorData?.[lang+"Desc"]}</div>
        <Row>
            <Col md={4}>
                <Menus data={CalculatorData?.leftMenuData} />
            </Col>
            <Col md={8}>
                {eligibilityContextData?.activeMenuId === CalculatorData?.leftMenuData?.[0]?.id && 
                    (<PersonalInfo data={CalculatorData?.leftMenuData?.[0]} />)}
                {eligibilityContextData?.activeMenuId === CalculatorData?.leftMenuData?.[1]?.id && 
                    (<Academics data={CalculatorData?.leftMenuData?.[1]} />)}
                {eligibilityContextData?.activeMenuId === CalculatorData?.leftMenuData?.[2]?.id && 
                    (<Relaxations data={CalculatorData?.leftMenuData?.[2]} />)}
                {eligibilityContextData?.activeMenuId === CalculatorData?.leftMenuData?.[3]?.id && 
                    (<Review data={CalculatorData?.leftMenuData?.[3]} />)}
            </Col>
        </Row>
    </Card>
 </div>
 </EligibilityContext.Provider>);
};

export default ExamEligibilityCalculator;