import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Form, TextBox, DateTimePicker, Select, Icon } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";
import { EligibilityCalculatorData } from "@Components/exam-eligibility-calculator/data.js";

const PersonalInfo = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const PersonalInfoForm = EligibilityCalculatorData?.steps?.personalInfo?.fields;
 const FormSteps = EligibilityCalculatorData?.steps;
 useEffect(()=>{ console.log("eligibilityContextData [PersonalInfo]: ",eligibilityContextData); },[eligibilityContextData]);
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        console.log("isValidForm: ", isValidForm, "form: ", form);
        const formData = form?.["personalInfo"];
        let eligibilityData = {...eligibilityContextData};
            eligibilityData.activeMenuId = 'academics';
            eligibilityData.data.personalInfo = {
                fullName: formData?.fullName?.value,
                dob: formData?.dob?.value,
                gender: formData?.gender?.value,
                nationality: formData?.nationality?.value,
                category: formData?.category?.value,
            };
       console.log("eligibilityData [personalInfo]: ", eligibilityData);
       setEligibilityContextData(eligibilityData);
    }
 };
 return (<div>
    <div><h5><b>1. {data?.[lang+"Label"]}</b></h5><hr/></div>
    <Form name={data?.id}  
        btnSubmit={{ align: 'right', btnType:'success', label:(<b>{FormSteps?.nextBtn?.[lang]}</b>), size: 12 }} 
        btnReset={{ btnType:'danger', label:(<b>{FormSteps?.resetBtn?.[lang]}</b>), size: 11 }}
        onSubmit={NextHandler}>
        <ContainerFluid>
            <Row>
                <Col md={12}>
                    <div className="mtop15p">
                        <TextBox name={PersonalInfoForm?.fullName?.id} 
                            label={PersonalInfoForm?.fullName?.[lang+"Label"]} 
                            placeholder={PersonalInfoForm?.fullName?.[lang+"Placeholder"]} 
                            value={eligibilityContextData?.data?.personalInfo?.fullName} 
                            validation={{ required:{ value: true, errorMessage:"This is a Mandatory Field" }}} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="mtop15p">
                        <DateTimePicker type="datePicker" label={PersonalInfoForm?.dob?.[lang+"Label"]}  
                            id={PersonalInfoForm?.dob?.id} name={PersonalInfoForm?.dob?.id} 
                            value={eligibilityContextData?.data?.personalInfo?.dob}
                            maxValue={PersonalInfoForm?.dob?.maxValue} minValue={PersonalInfoForm?.dob?.minValue}
                            validation={{ required:{ value: true, errorMessage:"This is a Mandatory Field" }}} />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mtop15p">
                        <Select name={PersonalInfoForm?.gender?.id}  
                            label={PersonalInfoForm?.gender?.[lang+"Label"]}  
                            placeholder={PersonalInfoForm?.gender?.[lang+"Placeholder"]}
                            value={eligibilityContextData?.data?.personalInfo?.gender}  fontSize="12"
                            options={PersonalInfoForm?.gender?.[lang+"Options"]}
                            validation={{ required:{ value: true, errorMessage:"This is a Mandatory Field" }}} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <div className="mtop15p">
                        <Select name={PersonalInfoForm?.nationality?.id} label={PersonalInfoForm?.nationality?.[lang+"Label"]} 
                            placeholder={PersonalInfoForm?.nationality?.[lang+"Placeholder"]}
                            value={eligibilityContextData?.data?.personalInfo?.nationality} fontSize="12"
                            options={PersonalInfoForm?.nationality?.[lang+"Options"]}
                            validation={{ required:{ value: true, errorMessage:"This is a Mandatory Field" }}} 
                            onChange={(event)=>{
                                let eligibilityData = {...eligibilityContextData};
                                eligibilityData.data.personalInfo.nationality =  event?.target?.value;
                                setEligibilityContextData(eligibilityData);
                            }} />
                        {(PersonalInfoForm?.nationality?.optionInfo?.[eligibilityContextData?.data?.personalInfo?.nationality]?.[lang]) 
                            && (<div style={{ fontSize:'11px', marginTop:'8px' }}>
                            <InfoIcon /> {PersonalInfoForm?.nationality?.optionInfo?.[eligibilityContextData?.data?.personalInfo?.nationality]?.[lang]}
                        </div>)}
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mtop15p">
                        <Select name={PersonalInfoForm?.category?.id} label={PersonalInfoForm?.category?.[lang+"Label"]} 
                            placeholder={PersonalInfoForm?.category?.[lang+"Placeholder"]} 
                            value={eligibilityContextData?.data?.personalInfo?.category}
                            options={PersonalInfoForm?.category?.[lang+"Options"]} fontSize="12"
                            validation={{ required:{ value: true, errorMessage:"This is a Mandatory Field" }}} 
                            onChange={(event)=>{
                                let eligibilityData = {...eligibilityContextData};
                                eligibilityData.data.personalInfo.category =  event?.target?.value;
                                setEligibilityContextData(eligibilityData);
                            }} />
                        {(PersonalInfoForm?.category?.optionInfo?.[eligibilityContextData?.data?.personalInfo?.category]?.[lang]) 
                            && (<div style={{ fontSize:'11px', marginTop:'8px' }}>
                            <InfoIcon /> {PersonalInfoForm?.category?.optionInfo?.[eligibilityContextData?.data?.personalInfo?.category]?.[lang]}
                        </div>)}
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
    </Form>
 </div>);
};

export default PersonalInfo;