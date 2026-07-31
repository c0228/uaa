import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { CreateId } from "@Components/exam-eligibility-calculator/commons.js";
import DisplayPwBD from "./components/display-pwbd/index.js";
import DisplayExServiceMan from "./components/display-exserviceman/index.js";
import DisplayDefencePersonnelDisabled from "./components/display-defenceperdisabled/index.js";
import DisplayCSEAttempt from "./components/display-cseattempt/index.js";

const FormReservations = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        console.log("isValidForm: ", isValidForm, "form: ", form);
        const formData = form?.["ReservationsAndRelaxations"];
        let eligibilityData = {...eligibilityContextData};
            eligibilityData.leftMenuActiveId = 'review';
            eligibilityData.data.reservations = {
                    "PwBD": formData?.PwBD?.value,
                    "disabilityCategory": formData?.disabilityCategory?.value,
                    "disabilityPercentage": formData?.disabilityPercentage?.value,
                    "exServiceMan": formData?.exServiceMan?.value,
                    "defencePersonnelDisabled": formData?.defencePersonnelDisabled?.value,
                    "cseAttempt": formData?.cseAttempt?.value,
                    "cseAttemptsUsed": formData?.cseAttemptsUsed?.value
                };
        setEligibilityContextData(eligibilityData);
    }
 };
  useEffect(()=>{
     console.log("eligibilityContextData: ", eligibilityContextData);
  },[eligibilityContextData]);

 return (<div>
    <div><h5><b>3. Reservation & Relaxations</b></h5><hr/></div>
    <Form name="reservations"  
        btnSubmit={{ align: 'right', btnType:'success', label:(<b>Next</b>), size: 12 }} 
        btnReset={{ btnType:'danger', label:(<b>Reset</b>), size: 11 }}
        onSubmit={NextHandler}>
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div className="mt-2" style={{ fontSize:'13px' }}><p>Provide additional information, if applicable. These details help 
                    calculate age relaxation, attempt limits, and eligibility accurately.</p></div>
            </Col>
        </Row>
        <div className="list-group">
            <div className="list-group-item" style={{ backgroundColor:'#fde2e2' }}>
                <DisplayPwBD />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#fde2e2' }}>
                <DisplayExServiceMan />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#fde2e2' }}>
                <DisplayDefencePersonnelDisabled />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#fde2e2' }}>
                <DisplayCSEAttempt />
            </div>
        </div>
    </ContainerFluid>
    </Form>
 </div>);
};

export default FormReservations;