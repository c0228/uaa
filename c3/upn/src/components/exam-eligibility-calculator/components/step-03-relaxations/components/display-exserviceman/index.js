import React from "react";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";

const DisplayExServiceMan = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 return (<Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id="exServiceMan" name="exServiceMan"  layout="horizontal"
                label="Are you an Ex-Serviceman?" 
                value={eligibilityContextData?.data?.reservations?.exServiceMan}
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
    <Col md={12}>
        <div style={{ fontSize:'12px'}}>
            <InfoIcon /> Candidates belonging to the Ex-Serviceman category may be eligible for 
            age relaxation in certain UPSC examinations, subject to the official notification.
        </div>
    </Col>
 </Row>);
};

export default DisplayExServiceMan;