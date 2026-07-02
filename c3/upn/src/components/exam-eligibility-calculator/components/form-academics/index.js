import React, { useEffect } from "react";
import {ContainerFluid, Row, Col, DateTimePicker, Select, Button, Form  } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const FormAcademics = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        const formData = form?.["EduQualificationForm"];
        setEligibilityContextData({
            ...eligibilityContextData,
            leftMenuActiveId: "reservation-and-relaxations",
            highestQualification: formData?.highestQualification?.value
        });
    }
 };
 useEffect(()=>{
    console.log("eligibilityContextData: ", eligibilityContextData);
 },[eligibilityContextData]);
 return (<div>
  <div><h5><b>2. Education Qualification</b></h5><hr/></div>
    <Form name="EduQualificationForm"  
      btnSubmit={{ align: 'right', btnType:'success', label:(<b>Next</b>), size: 12 }} 
      btnReset={{ btnType:'danger', label:(<b>Reset</b>), size: 11 }}
      onSubmit={NextHandler}>
  <ContainerFluid>
    <Row>
        <Col md={6}>
            <div className="mt-3">
                 <Select name="highestQualification"
                    label="Highest Qualification"
                    placeholder="Select your Qualification"
                        options={[{ id: 'intermediate', label: '12th Pass/ Intermediate', value: '12th Pass/ Intermediate' },
                                { id: 'diploma', label: 'Diploma', value: 'Diploma' },
                                { id: 'graduate', label: 'Graduate', value: 'Graduate' },
                                { id: 'finalYearGraduate', label: 'Final Year Graduate', value: 'Final Year Graduate' },
                                { id: 'engineeringGraduate', label: 'Engineering Graduate', value: 'Engineering Graduate' },
                                { id: 'mbbs', label: 'MBBS', value: 'MBBS' },
                                { id: 'postGraduate', label: 'Post Graduate', value: 'Post Graduate' },]}
                    fontSize="12" />
            </div>
        </Col>
    </Row>
  </ContainerFluid>
  </Form>
 </div>);
};

export default FormAcademics;