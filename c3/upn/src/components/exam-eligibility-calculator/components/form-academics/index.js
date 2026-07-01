import React from "react";
import {ContainerFluid, Row, Col, DateTimePicker, Select, Button  } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const FormAcademics = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const nextHandler = () =>{
    setEligibilityContextData({ leftMenuActiveId: "reservation-and-relaxations" });
 };
 return (<div>
  <div><h5><b>2. Education Qualification</b></h5><hr/></div>
  <ContainerFluid>
    <Row>
        <Col md={6}>
            <div className="mt-3">
                 <Select
                    label="Highest Qualification"
                    placeholder="Select your Qualification"
                        options={[{ id: 'intermediate', label: '12th Pass/ Intermediate', value: '12th Pass/ Intermediate' },
                                { id: 'diploma', label: 'Diploma', value: 'Diploma' },
                                { id: 'graduate', label: 'Graduate', value: 'Graduate' },
                                { id: 'finalYearGraduate', label: 'Final Year Graduate', value: 'Final Year Graduate' },
                                { id: 'engineeringGraduate', label: 'Engineering Graduate', value: 'Engineering Graduate' },
                                { id: 'mbbs', label: 'MBBS', value: 'MBBS' },
                                { id: 'postGraduate', label: 'Post Graduate', value: 'Post Graduate' },]}
                    fontSize="12"
                    onChange={(event) => {
                        let option = event.target.value;
                    }} />
            </div>
        </Col>
    </Row>
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

export default FormAcademics;