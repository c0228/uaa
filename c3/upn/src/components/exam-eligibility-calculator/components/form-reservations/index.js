import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { CreateId } from "@Components/exam-eligibility-calculator/utils.js";
import DisplayPwBD from "./components/display-pwbd/index.js";

const FormReservations = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const defaultReservationFormData = {
    "PwBD": "",
    "disabilityCategory": "",
    "disabilityPercentage": "",
    "exServiceMan": "",
    "defencePersonnelDisabled": "",
    "cseAttempt": "",
    "cseAttemptsUsed": ""
 };
 const [reservationFormData, setReservationFormData] = useState(defaultReservationFormData);
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        console.log("isValidForm: ", isValidForm, "form: ", form);
        const formData = form?.["ReservationsAndRelaxations"];
        setEligibilityContextData({
            ...eligibilityContextData,
            leftMenuActiveId: "review",
            "PwBD": formData?.PwBD?.value,
            "disabilityCategory": formData?.disabilityCategory?.value,
            "disabilityPercentage": formData?.disabilityPercentage?.value,
            "exServiceMan": formData?.exServiceMan?.value,
            "defencePersonnelDisabled": formData?.defencePersonnelDisabled?.value,
            "cseAttempt": formData?.cseAttempt?.value,
            "cseAttemptsUsed": formData?.cseAttemptsUsed?.value
        });
    }
 };
  useEffect(()=>{
     console.log("eligibilityContextData: ", eligibilityContextData);
  },[eligibilityContextData]);

const DisplayExServiceMan = () =>{
 return (<Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id="exServiceMan" name="exServiceMan"  layout="horizontal"
                label="Are you an Ex-Serviceman?" 
                value={reservationFormData.exServiceMan}
                        options={[{ id:'Yes', label:"Yes", value:"Yes"},
                                { id:'No', label:"No", value:"No" }]} 
                        onChange={(data)=>{
                            if(data?.length>0){
                                setReservationFormData({...reservationFormData, exServiceMan: data });
                            }
                        }}        
                        />
        </div>
    </Col>
    <Col md={12}>
        <div style={{ fontSize:'12px'}}>
            Candidates belonging to the Ex-Serviceman category may be eligible for 
            age relaxation in certain UPSC examinations, subject to the official notification.
        </div>
    </Col>
 </Row>);
 };
 const DisplayDefencePersonnelDisabled = () =>{
  return (<Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id="defencePersonnelDisabled" name="defencePersonnelDisabled"  layout="horizontal"
                label="Are you Defence Personnel disabled during military operations?" 
                value={reservationFormData.defencePersonnelDisabled}
                        options={[{ id:'Yes', label:"Yes", value:"Yes"},
                                { id:'No', label:"No", value:"No" }]} 
                        onChange={(data)=>{
                            if(data?.length>0){
                                setReservationFormData({...reservationFormData, defencePersonnelDisabled: data });
                            }
                        }}        
                        />
        </div>
    </Col>
    <Col md={12}>
        <div style={{ fontSize:'12px'}}>
            This information is used only to determine applicable age relaxation where provided in 
            the official UPSC notification.
        </div>
    </Col>
  </Row>);
 };
 const DisplayCSEAttempt = () =>{
  return (<>
  <Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id="cseAttempt" name="cseAttempt"  layout="horizontal"
                label="Have you appeared for UPSC Civil Services Examination before??" 
                value={reservationFormData.cseAttempt}
                        options={[{ id:'Yes', label:"Yes", value:"Yes"},
                                { id:'No', label:"No", value:"No" }]} 
                        onChange={(data)=>{
                            if(data?.length>0){
                                setReservationFormData({...reservationFormData, cseAttempt: data });
                            }
                        }}        
                        />
        </div>
    </Col>
  </Row>
  {reservationFormData?.cseAttempt==='Yes' && (<>
            <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Select name="cseAttemptsUsed" label="Attempts Used" placeholder="Select Completed Attempts"
                    options={["1","2","3","4","5","6","7","8","9"]?.map((d,i)=>{
                        return { id: d, label: d, value: d };
                    })}
                    onChange={(event) => {
                        let option = event.target.value;
                    }} />
                </div>
            </Col>
    </Row>
    </>)}
  </>);
 };
 return (<div>
    <div><h5><b>3. Reservation & Relaxations</b></h5><hr/></div>
    <Form name="ReservationsAndRelaxations"  
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
          {/*}  <div className="list-group-item" style={{ backgroundColor:'#fde2e2' }}>
                <DisplayExServiceMan />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#fde2e2' }}>
                <DisplayDefencePersonnelDisabled />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#fde2e2' }}>
                <DisplayCSEAttempt />
            </div> */}
        </div>
    </ContainerFluid>
    </Form>
 </div>);
};

export default FormReservations;