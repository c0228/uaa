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
            data:{
                ...eligibilityContextData.data,
                highestQualification: formData?.highestQualification?.value
            }
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
                    value={eligibilityContextData?.data?.academics?.highestQualification}
                    options={["12th Pass/ Intermediate", "Diploma", "Graduate", "Final Year Graduate", 
                        "Engineering Graduate", "MBBS", "Post Graduate"]?.map((d,i)=>{
                           return ({ id: d, label:d, value: d }); 
                        })}
                    fontSize="12" 
                    validation={{
                            required:{
                                value: true,
                                errorMessage:"[This is a Mandatory Field]"
                            } }} />
            </div>
        </Col>
    </Row>
  </ContainerFluid>
  </Form>
 </div>);
};

export default FormAcademics;