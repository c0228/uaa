import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";
import { EligibilityCalculatorData } from "@Components/exam-eligibility-calculator/data.js";

const DisplayExServiceMan = () =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const RelaxationsForm = EligibilityCalculatorData?.steps?.reservations?.fields;
 return (<Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id={RelaxationsForm?.exServiceMan?.id} 
                name={RelaxationsForm?.exServiceMan?.name}  layout="horizontal"
                label={RelaxationsForm?.exServiceMan?.[lang+"Label"]}
                value={eligibilityContextData?.data?.reservations?.exServiceMan}
                options={RelaxationsForm?.exServiceMan?.[lang+"Options"]}
                validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
        </div>
    </Col>
    <Col md={12}>
        <div>{RelaxationsForm?.exServiceMan?.[lang+"Info"]}</div>
    </Col>
 </Row>);
};

export default DisplayExServiceMan;