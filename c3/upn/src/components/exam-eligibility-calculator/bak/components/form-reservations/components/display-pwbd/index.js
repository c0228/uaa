import React, { useState } from "react";
import { Row, Col, Switch, Select, Range } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const DisplayPwBD = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 return (<>
        <Row>
        <Col md={12}>
                <div className="mt-2">
                    <Switch type="radio" id="PwBD" name="PwBD"  layout="horizontal"
                        label="Are you a Person with Benchmark Disability (PwBD)?" 
                        value={eligibilityContextData?.data?.reservations?.pwBD}
                        options={[{ id:'Yes', label:"Yes", value:"Yes"},
                                { id:'No', label:"No", value:"No" }]} 
                        validation={{
                            required:{
                                value: true,
                                errorMessage:"[This is a Mandatory Field]"
                            } }}
                     />
                </div>
        </Col>
        </Row>
        {eligibilityContextData?.data?.reservations?.pwBD==='Yes' && (<>
            <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Select name="disabilityCategory" label="Disability Category" placeholder="Select Disability" 
                    value={eligibilityContextData?.data?.reservations?.disabilityCategory}
                    options={["Blindness / Low Vision","Deaf / Hard of Hearing","Locomotor Disability",
                        "Autism","Intellectual Disability","Multiple Disabilities","Other"]?.map((d,i)=>{
                        return { id: d, label: d, value: d };
                    })} 
                    validation={{
                        required:{
                            value: true,
                            errorMessage:"[This is a Mandatory Field]"
                        } 
                    }} />
                </div>
            </Col>
            <Col md={6}>
                <div className="mt-3">
                    <Range name="disabilityPercentage" label="Disability Percentage" 
                        value={eligibilityContextData?.data?.reservations?.disabilityPercentage}
                        validation={{
                            required:{
                                value: true,
                                errorMessage:"[This is a Mandatory Field]"
                            } }} />
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

export default DisplayPwBD;