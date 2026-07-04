import React, { useState } from "react";
import {ContainerFluid, Row, Col, DateTimePicker, Select, Button, Form  } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { CreateId } from "@Components/exam-eligibility-calculator/utils.js";

const FormPersonalInfo = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        const formData = form?.["PersonalInfoForm"];
        setEligibilityContextData({
            ...eligibilityContextData,
            leftMenuActiveId: "edu-qualification",
            dob: formData?.dob?.value,
            gender: formData?.gender?.value,
            nationality: formData?.nationality?.value,
            category: formData?.category?.value
        });
    }
 };
 return (<div>
  <div><h5><b>1. Personal Information</b></h5><hr/></div>
  <Form name="PersonalInfoForm"  
    btnSubmit={{ align: 'right', btnType:'success', label:(<b>Next</b>), size: 12 }} 
    btnReset={{ btnType:'danger', label:(<b>Reset</b>), size: 11 }}
    onSubmit={NextHandler}>
  <ContainerFluid>
    <Row>
        <Col md={6}>
            <div className="mt-3">
                <DateTimePicker type="datePicker" label="Your Date of Birth" id="date" name="dob" 
                    validation={{
                        required:{
                            value: true,
                            errorMessage:"This is a Mandatory Field"
                        } }} 
                    onChange={(value)=>setEligibilityContextData({...eligibilityContextData, "dob": value })} />
            </div>
        </Col>
        <Col md={6}>
            <div className="mt-3">
                 <Select name="gender"
                    label="Your Gender"
                    placeholder="Select your Gender"
                        options={[{ id: 'male', label: 'Male', value: 'Male' },
                            { id: 'female', label: 'Female', value: 'Female' }]}
                    fontSize="12"
                    validation={{
                        required:{
                            value: true,
                            errorMessage:"This is a Mandatory Field"
                        } }} 
                    onChange={(value)=>setEligibilityContextData({...eligibilityContextData, "gender": value })} />
            </div>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <div className="mt-3">
                <Select name="nationality"
                    label="Your Nationality"
                    placeholder="Select your Nationality"
                        options={[{ id: 'indian', label: 'Indian', value: 'Indian' },
                            { id: 'nepalese', label: 'Nepalese', value: 'Nepalese' },
                            { id: 'bhutanese', label: 'Bhutanese', value: 'Bhutanese' },
                            { id: 'tibetanRefugee', label: 'Tibetan Refugee', value: 'Tibetan Refugee' },
                            { id: 'personOfIndianOrigin', label: 'Person of Indian Origin (PIO)', value: 'Person of Indian Origin (PIO)' }]}
                    fontSize="12"
                    validation={{
                        required:{
                            value: true,
                            errorMessage:"This is a Mandatory Field"
                        } }} 
                    onChange={(value)=>setEligibilityContextData({...eligibilityContextData, "nationality": value })} />
            </div>
        </Col>
        <Col md={6}>
            <div className="mt-3">
                 <Select name="category" label="Your Category" placeholder="Select your Category"
                        options={["General (Unreserved / UR)","Economically Weaker Section (EWS)","Other Backward Class (OBC - Non-Creamy Layer)",
                    "Scheduled Caste (SC)","Scheduled Tribe (ST)"]?.map((d,i)=>{
                        return { id: CreateId(d), label: d, value: d };
                    })}
                    fontSize="12"
                    validation={{
                        required:{
                            value: true,
                            errorMessage:"This is a Mandatory Field"
                        } }} 
                    onChange={(value)=>setEligibilityContextData({...eligibilityContextData, "category": value })} />
            </div>
        </Col>
    </Row>
  </ContainerFluid>
  </Form>
 </div>);
};

export default FormPersonalInfo;