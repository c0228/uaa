import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {ContainerFluid, Row, Col, DateTimePicker, Select, Button, Form, Icon  } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { getFieldLabel, updateEligiblityData, CreateId } from "@Components/exam-eligibility-calculator/commons.js";
import { GetYearsBackDate } from "@Utils/DateFormatUtils.js";

const PERSONAL_INFO = {
    "FORM_NAME":"PersonalInfoForm",
    "SECTION_ID": "personalInfo",
    "FIELDS":{
        "DOB":"dob",
        "GENDER":"gender",
        "NATIONALITY":"nationality",
        "CATEGORY":"category"
    },
    "NEXT_ACTIVE_ID": "edu-qualification"
};

const FormPersonalInfo = () =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 useEffect(()=>{ console.log("eligibilityContextData: ", eligibilityContextData); },[eligibilityContextData]);
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        const formData = form?.[PERSONAL_INFO?.FORM_NAME];
        const personalInfo = updateEligiblityFormData(formData,PERSONAL_INFO?.SECTION_ID);
        setEligibilityContextData({
            ...eligibilityContextData,
            leftMenuActiveId: PERSONAL_INFO?.NEXT_ACTIVE_ID,
            data: {
                ...eligibilityContextData.data,
                personalInfo
            }
        });
    }
 };
 const InfoIcon = () =><Icon type="FontAwesome" name="fa-info-circle" size={12} style={{ marginRight:'5px' }} />
 return (<div>
  <div><h5><b>1. {getFieldLabel([PERSONAL_INFO?.SECTION_ID], lang)}</b></h5><hr/></div>
  <Form name={PERSONAL_INFO?.FORM_NAME}  
    btnSubmit={{ align: 'right', btnType:'success', label:(<b>Next</b>), size: 12 }} 
    btnReset={{ btnType:'danger', label:(<b>Reset</b>), size: 11 }}
    onSubmit={NextHandler}>
  <ContainerFluid>
    <Row>
        <Col md={6}>
            <div className="mt-3">
                <DateTimePicker type="datePicker" 
                    label={getFieldLabel([PERSONAL_INFO?.SECTION_ID, PERSONAL_INFO?.FIELDS?.DOB], lang)} 
                    id="date" 
                    name="dob" 
                    value={eligibilityContextData?.data?.personalInfo?.dob}
                    maxValue={GetYearsBackDate(14)}
                    minValue={GetYearsBackDate(40)}
                    validation={{
                        required:{
                            value: true,
                            errorMessage:"This is a Mandatory Field"
                        } }} />
            </div>
        </Col>
        <Col md={6}>
            <div className="mt-3">
                 <Select name="gender"
                    label={getFieldLabel([PERSONAL_INFO?.SECTION_ID, PERSONAL_INFO?.FIELDS?.GENDER], lang)}
                    placeholder="Select your Gender"
                    value={eligibilityContextData?.data?.personalInfo?.gender}
                    options={[{ id: 'male', label: 'Male', value: 'Male' },
                            { id: 'female', label: 'Female', value: 'Female' }]}
                    fontSize="12"
                    validation={{
                        required:{
                            value: true,
                            errorMessage:"This is a Mandatory Field"
                        } }} 
                    // onChange={(event)=>setEligibilityContextData({...eligibilityContextData, "gender": event?.target?.value })} 
                    />
            </div>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <div className="mt-3">
                <Select name="nationality"
                    label="Your Nationality"
                    placeholder="Select your Nationality"
                    value={eligibilityContextData?.data?.personalInfo?.nationality}
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
                   // onChange={(event)=>setEligibilityContextData({...eligibilityContextData, "nationality": event?.target?.value })} 
                    />
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
                        value={eligibilityContextData?.data?.personalInfo?.category}
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
                   // onChange={(event)=>setEligibilityContextData({...eligibilityContextData, "category": event?.target?.value })} 
                    />
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