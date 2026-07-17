import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Switch, Select, Range } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";
import { EligibilityCalculatorData } from "@Components/exam-eligibility-calculator/data.js";

const DisplayPwBD = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const RelaxationsForm = EligibilityCalculatorData?.steps?.reservations?.fields;
 return (<>
        <Row>
        <Col md={12}>
                <div className="mt-2">
                    <Switch type="radio" id={RelaxationsForm?.pwBD?.id} name={RelaxationsForm?.pwBD?.id}  layout="horizontal"
                        label={RelaxationsForm?.pwBD?.[lang+"Label"]} options={RelaxationsForm?.pwBD?.[lang+"Options"]} 
                        value={eligibilityContextData?.data?.reservations?.pwBD}
                        validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
                </div>
        </Col>
        </Row>
        {eligibilityContextData?.data?.reservations?.pwBD==='Yes' && (<>
            <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Select name={RelaxationsForm?.disabilityCategory?.id} 
                        label={RelaxationsForm?.disabilityCategory?.[lang+"Label"]} 
                        placeholder={RelaxationsForm?.disabilityCategory?.[lang+"Placeholder"]}
                    value={eligibilityContextData?.data?.reservations?.disabilityCategory}
                    options={RelaxationsForm?.disabilityCategory?.[lang+"Options"]} 
                    validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
                </div>
            </Col>
            <Col md={6}>
                <div className="mt-3">
                    <Range name={RelaxationsForm?.disabilityPercentage?.id} 
                        label={RelaxationsForm?.disabilityPercentage?.[lang+"Label"]}
                        value={eligibilityContextData?.data?.reservations?.disabilityPercentage}
                        validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div>{RelaxationsForm?.disabilityPercentage?.[lang+"Info"]}</div>
            </Col>
        </Row>
    </>)}
 </>);
};

export default DisplayPwBD;