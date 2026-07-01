import React, { useState, useEffect } from "react";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { CreateId } from "@Components/exam-eligibility-calculator/utils.js";

const FormReservations = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const defaultReservationFormData = {
    "PwBD": "",
    "disabilityCategory": "",
    "disabilityPercentage": "",
    "exServiceMan": "",
    "defencePersonnelDisabled": "",
    "cseAttempt": ""
 };
 const [reservationFormData, setReservationFormData] = useState(defaultReservationFormData);
 const nextHandler = () =>{
    setEligibilityContextData({ leftMenuActiveId: "review" });
 };
const DisplayPwBD = () =>{
 return (<>
  <Row>
        <Col md={12}>
                <div className="mt-2">
                    <Switch type="radio" id="PwBD" name="PwBD"  layout="horizontal"
                        label="Are you a Person with Benchmark Disability (PwBD)?" 
                        value={reservationFormData.PwBD}
                        options={[{ id:'Yes', label:"Yes", value:"Yes"},
                                { id:'No', label:"No", value:"No" }]} 
                        onChange={(data)=>{
                            if(data?.length>0){
                                setReservationFormData({...reservationFormData, PwBD: data });
                            }
                        }}        
                        />
                </div>
            </Col>
        </Row>
        {reservationFormData?.PwBD==='Yes' && (<>
            <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Select label="Disability Category" placeholder="Select Disability"
                    options={["Blindness / Low Vision","Deaf / Hard of Hearing","Locomotor Disability",
                        "Autism","Intellectual Disability","Multiple Disabilities","Other"]?.map((d,i)=>{
                        return { id: CreateId(d), label: d, value: d };
                    })}
                    onChange={(event) => {
                        let option = event.target.value;
                    }} />
                </div>
            </Col>
            <Col md={6}>
                <div className="mt-3">
                    <Range name="formRanger" label="Disability Percentage" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div style={{ fontSize:'11px' }}>
                    <div>Enter the percentage mentioned in your valid disability certificate.
                    PwBD benefits generally apply to benchmark disabilities of 40% or more, subject to UPSC notification 
                    requirements.</div>
                    <div>If &lt; 40%,  Based on the entered percentage, PwBD relaxation may not be applicable.</div>
                    <div>If &gt;= 40%, Benchmark disability criteria satisfied for PwBD consideration.</div>
                </div>
            </Col>
        </Row>
    </>)}
 </>);
};
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
                    <Select label="Attempts Used" placeholder="Select Completed Attempts"
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
        <Row>
            <Col md={12}>
                <div align="right" className="mt-3">
                    <Button type="success" size={11} onClick={()=>nextHandler()}><b>Next</b></Button>
                </div>
            </Col>
        </Row>
    </ContainerFluid>
 </div>);
};

export default FormReservations;