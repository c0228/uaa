import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form, Icon } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";
import { EligibilityCalculatorData } from "@Components/exam-eligibility-calculator/data.js";

const DisplayDefencePersonnelDisabled = () =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const RelaxationsForm = EligibilityCalculatorData?.steps?.reservations?.fields;
 return (<Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id={RelaxationsForm?.defencePersonnelDisabled?.id} 
                name={RelaxationsForm?.defencePersonnelDisabled?.id} layout="horizontal"
                label={RelaxationsForm?.defencePersonnelDisabled?.[lang+"Label"]}
                value={eligibilityContextData?.data?.reservations?.defencePersonnelDisabled}
                options={RelaxationsForm?.defencePersonnelDisabled?.[lang+"Options"]} 
                validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
        </div>
    </Col>
    <Col md={12}>
        <div>{RelaxationsForm?.defencePersonnelDisabled?.[lang+"Info"]}</div>
    </Col>
  </Row>);
};

export default DisplayDefencePersonnelDisabled;