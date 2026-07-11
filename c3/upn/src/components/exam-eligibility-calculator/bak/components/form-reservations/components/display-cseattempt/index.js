import React from "react";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const DisplayCSEAttempt = () =>{
  const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
  return (<>
  <Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id="cseAttempt" name="cseAttempt"  layout="horizontal"
                label="Have you appeared for UPSC Civil Services Examination before??" 
                value={eligibilityContextData?.data?.reservations?.cseAttempt}
                options={[{ id:'Yes', label:"Yes", value:"Yes"},
                    { id:'No', label:"No", value:"No" }]} 
                validation={{
                    required:{
                        value: true,
                        errorMessage:"[This is a Mandatory Field]"
                    } 
                }} />
        </div>
    </Col>
  </Row>
  {eligibilityContextData?.data?.reservations?.cseAttempt==='Yes' && (<>
            <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Select name="cseAttemptsUsed" label="Attempts Used for CSE Examination" placeholder="Select Completed Attempts"
                    value={eligibilityContextData?.data?.reservations?.cseAttemptsUsed}
                    options={["1","2","3","4","5","6","7","8","9"]?.map((d,i)=>{
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
    </Row>
    </>)}
  </>);
};

export default DisplayCSEAttempt;