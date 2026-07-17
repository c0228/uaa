import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";
import { EligibilityCalculatorData } from "@Components/exam-eligibility-calculator/data.js";

const DisplayCSEAttempt = () =>{
  const { lang } = useParams();
  const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
  const RelaxationsForm = EligibilityCalculatorData?.steps?.reservations?.fields;
  return (<>
  <Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id={RelaxationsForm?.cseAttempt?.id} 
                name={RelaxationsForm?.cseAttempt?.id}  layout="horizontal"
                label={RelaxationsForm?.cseAttempt?.[lang+"Label"]} 
                value={eligibilityContextData?.data?.reservations?.cseAttempt}
                options={RelaxationsForm?.cseAttempt?.[lang+"Options"]} 
                validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
        </div>
    </Col>
  </Row>
  {eligibilityContextData?.data?.reservations?.cseAttempt==='Yes' && (<>
            <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Select name={RelaxationsForm?.cseAttemptsUsed?.id} 
                    label={RelaxationsForm?.cseAttemptsUsed?.[lang+"Label"]}  
                    placeholder={RelaxationsForm?.cseAttemptsUsed?.[lang+"Placeholder"]}  
                    value={eligibilityContextData?.data?.reservations?.cseAttemptsUsed}
                    options={RelaxationsForm?.cseAttemptsUsed?.[lang+"Options"]} 
                    validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
                </div>
            </Col>
    </Row>
    </>)}
  </>);
};

export default DisplayCSEAttempt;