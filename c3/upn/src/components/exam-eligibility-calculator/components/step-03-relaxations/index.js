import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import DisplayPwBD from "./components/display-pwbd/index.js";
import DisplayExServiceMan from "./components/display-exserviceman/index.js";
import DisplayDefencePersonnelDisabled from "./components/display-defenceperdisabled/index.js";
import DisplayCSEAttempt from "./components/display-cseattempt/index.js";

const RelaxationsForm = {
  "enDesc": (<div style={{ fontSize:'12px' }}>Provide additional information, if applicable. These details help calculate age relaxation, attempt limits, and eligibility accurately.</div>),
  "hiDesc": (<div style={{ fontSize:'14px' }}>अगर लागू हो, तो अतिरिक्त जानकारी दें। ये विवरण उम्र में छूट, प्रयास की सीमा और पात्रता की सही-सही गणना करने में मदद करते हैं।</div>),
  "nextBtn":{
        "en":"Next Step",
        "hi":"अगला कदम"
    },
    "resetBtn":{
        "en":"Reset Form",
        "hi":"फ़ॉर्म रीसेट करें"
    }
};

const Relaxations = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        console.log("isValidForm: ", isValidForm, "form: ", form);
        const formData = form?.["reservations"];
        let eligibilityData = {...eligibilityContextData};
            eligibilityData.activeMenuId = 'review';
            eligibilityData.data.reservations = {
                pwBD: formData?.pwBD?.value,
                disabilityCategory: formData?.disabilityCategory?.value,
                disabilityPercentage: formData?.disabilityPercentage?.value,
                exServiceMan: formData?.exServiceMan?.value,
                defencePersonnelDisabled: formData?.defencePersonnelDisabled?.value,
                cseAttempt: formData?.cseAttempt?.value,
                cseAttemptsUsed: formData?.cseAttemptsUsed?.value
            };
       setEligibilityContextData(eligibilityData);
    }
 };
 return (<div>
    <div><h5><b>3. {data?.[lang+"Label"]}</b></h5><hr/></div>
    <Form name="ReservationsAndRelaxations"  
        btnSubmit={{ align: 'right', btnType:'success', label:(<b>{RelaxationsForm?.nextBtn?.[lang]}</b>), size: 12 }} 
        btnReset={{ btnType:'danger', label:(<b>{RelaxationsForm?.resetBtn?.[lang]}</b>), size: 11 }}
        onSubmit={NextHandler}>
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div className="mt-2">{RelaxationsForm?.[lang+"Desc"]}</div>
            </Col>
        </Row>
        <div className="list-group">
            <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                <DisplayPwBD />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                <DisplayExServiceMan />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                <DisplayDefencePersonnelDisabled />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                <DisplayCSEAttempt />
            </div>
        </div>
    </ContainerFluid>
    </Form>
 </div>);
};

export default Relaxations;