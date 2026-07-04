import React, { useState, useEffect } from "react";
import {ContainerFluid, Row, Col, DateTimePicker, Select, Button, Form, Icon  } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { CreateId } from "@Components/exam-eligibility-calculator/utils.js";
import { GetYearsBackDate } from "@Utils/DateFormatUtils.js";

const FormPersonalInfo = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 useEffect(()=>{ console.log("eligibilityContextData: ", eligibilityContextData); },[eligibilityContextData]);
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
 const InfoIcon = () =><Icon type="FontAwesome" name="fa-info-circle" size={12} style={{ marginRight:'5px' }} />
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
                    maxValue={GetYearsBackDate(14)}
                    minValue={GetYearsBackDate(40)}
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
                    onChange={(event)=>setEligibilityContextData({...eligibilityContextData, "gender": event?.target?.value })} />
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
                    onChange={(event)=>setEligibilityContextData({...eligibilityContextData, "nationality": event?.target?.value })} />
                <div style={{ fontSize:'11px', marginTop:'8px' }}>
                    {eligibilityContextData?.nationality==='Tibetan Refugee' && (<>
                    <InfoIcon /> A <b>Tibetan refugee</b> who came to India before <b>1 January 1962</b> with the intention of permanently 
                    settling in India.</>)}
                     {eligibilityContextData?.nationality==='Person of Indian Origin (PIO)' && (<>
                     <InfoIcon /> A <b>Person of Indian Origin (PIO)</b> who migrated from Pakistan, Myanmar (Burma), Sri Lanka, Kenya, Uganda, 
                     Tanzania, Zambia, Malawi, Zaire (now the Democratic Republic of the Congo), Ethiopia, or Vietnam with 
                     the intention of permanently settling in India. Candidates in categories 2–5 require a Certificate of 
                     Eligibility from the Government of India.
                     </>)}
                </div>
            </div>
        </Col>
        <Col md={6}>
            <div className="mt-3">
                <Select name="category" label="Your Category" placeholder="Select your Category"
                        options={["General (Unreserved / UR)","Economically Weaker Section (EWS)",
                            "Other Backward Class (OBC - Non-Creamy Layer)",
                    "Scheduled Caste (SC)","Scheduled Tribe (ST)"]?.map((d,i)=>{
                        return { id: CreateId(d), label: d, value: d };
                    })}
                    fontSize="12"
                    validation={{
                        required:{
                            value: true,
                            errorMessage:"This is a Mandatory Field"
                        } }} 
                    onChange={(event)=>setEligibilityContextData({...eligibilityContextData, "category": event?.target?.value })} />
                <div style={{ fontSize:'11px', marginTop:'8px' }}>
                    {eligibilityContextData?.category==='General (Unreserved / UR)' && (<>
                    <InfoIcon /> <b>General (Unreserved / UR) -</b> No reservation
                    </>)}
                    {eligibilityContextData?.category==='Economically Weaker Section (EWS)' && (<>
                    <InfoIcon /> <b>Economically Weaker Sections (EWS) -</b> Reservation for economically weaker candidates who are not covered under SC, ST, or OBC reservations.
                    </>)}
                    {eligibilityContextData?.category==='Other Backward Class (OBC - Non-Creamy Layer)' && (<>
                    <InfoIcon /> <b>Other Backward Classes (OBC – Non-Creamy Layer) -</b> Reservation for eligible OBC candidates who fall under the non-creamy layer.
                    </>)}
                    {eligibilityContextData?.category==='Scheduled Caste (SC)' && (<>
                    <InfoIcon /> <b>Scheduled Castes (SC) -</b> Reservation for candidates belonging to Scheduled Castes.
                    </>)}
                    {eligibilityContextData?.category==='Scheduled Tribe (ST)' && (<>
                    <InfoIcon /> <b>Scheduled Tribes (ST) -</b> Reservation for candidates belonging to Scheduled Tribes.
                    </>)}
                </div>
            </div>
        </Col>
    </Row>
  </ContainerFluid>
  </Form>
 </div>);
};

export default FormPersonalInfo;