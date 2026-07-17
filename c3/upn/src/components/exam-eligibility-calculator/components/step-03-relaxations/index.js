import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import DisplayPwBD from "./components/display-pwbd/index.js";
import DisplayExServiceMan from "./components/display-exserviceman/index.js";
import DisplayDefencePersonnelDisabled from "./components/display-defenceperdisabled/index.js";
import DisplayCSEAttempt from "./components/display-cseattempt/index.js";
import { EligibilityCalculatorData } from "@Components/exam-eligibility-calculator/data.js";

const Relaxations = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const RelaxationsForm = EligibilityCalculatorData?.steps?.reservations?.fields;
 const FormSteps = EligibilityCalculatorData?.steps;
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        console.log("isValidForm [Relaxations]: ", isValidForm, "form: ", form);
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
        btnSubmit={{ align: 'right', btnType:'success', label:(<b>{FormSteps?.nextBtn?.[lang]}</b>), size: 12 }} 
        btnReset={{ btnType:'danger', label:(<b>{FormSteps?.resetBtn?.[lang]}</b>), size: 11 }}
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