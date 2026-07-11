import React from "react";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form, Icon } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";

const DisplayDefencePersonnelDisabled = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 return (<Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id="defencePersonnelDisabled" name="defencePersonnelDisabled"  layout="horizontal"
                label="Are you Defence Personnel disabled during military operations?" 
                value={eligibilityContextData?.data?.reservations?.defencePersonnelDisabled}
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
            <InfoIcon /> This information is used only to determine applicable age relaxation where provided in 
            the official UPSC notification.
        </div>
    </Col>
  </Row>);
};

export default DisplayDefencePersonnelDisabled;