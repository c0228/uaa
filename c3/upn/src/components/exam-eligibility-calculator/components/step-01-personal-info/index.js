import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Form, TextBox, DateTimePicker, Select, Icon } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { GetYearsBackDate } from "@Utils/DateFormatUtils.js";

const InfoIcon = () =><Icon type="FontAwesome" name="fa-info-circle" size={12} style={{ marginRight:'5px' }} />

const PersonalInfoForm = {
    "fullName":{
        "id": "fullName",
        "enLabel": "Your Full Name",
        "hiLabel":"आपका पूरा नाम",
        "enPlaceholder": "Enter your Full Name",
        "hiPlaceholder":"अपना पूरा नाम दर्ज करें",
    },
    "dob":{
        "id":"dob",
        "enLabel":"Your Date of Birth",
        "hiLabel":"आपका जन्म की तारीख",
        "maxValue": GetYearsBackDate(14),
        "minValue": GetYearsBackDate(40),
    },
    "gender":{
        "id":"gender",
        "enLabel":"Your Gender",
        "hiLabel":"आपका लिंग",
        "enPlaceholder":"Select your Gender",
        "hiPlaceholder":"अपना लिंग चुनें",
        "enOptions":[{ "id": 'male', "label": 'Male', "value": 'Male' },
                    { "id": 'female', "label": 'Female', "value": 'Female' }],
        "hiOptions":[{ "id": 'male', "label": 'पुरुष', "value": 'Male' },
                    { "id": 'female', "label": 'महिला', "value": 'Female' }],
    },
    "nationality":{
        "id":"nationality",
        "enLabel":"Your Nationality",
        "hiLabel":"आपका राष्ट्रीयता",
        "enPlaceholder":"Select your Nationality",
        "hiPlaceholder":"अपनी राष्ट्रीयता चुनें",
        "enOptions":[{ id: 'indian', label: 'Indian', value: 'Indian' },
                    { id: 'nepalese', label: 'Nepalese', value: 'Nepalese' },
                    { id: 'bhutanese', label: 'Bhutanese', value: 'Bhutanese' },
                    { id: 'tibetanRefugee', label: 'Tibetan Refugee', value: 'Tibetan Refugee' },
                    { id: 'personOfIndianOrigin', label: 'Person of Indian Origin (PIO)', value: 'Person of Indian Origin (PIO)' }],
        "hiOptions":[{ id: 'indian', label: 'भारतीय', value: 'Indian' },
                    { id: 'nepalese', label: 'नेपाली', value: 'Nepalese' },
                    { id: 'bhutanese', label: 'भूटानी', value: 'Bhutanese' },
                    { id: 'tibetanRefugee', label: 'तिब्बती शरणार्थी', value: 'Tibetan Refugee' },
                    { id: 'personOfIndianOrigin', label: 'भारतीय मूल का व्यक्ति (PIO)', value: 'Person of Indian Origin (PIO)' }],
        "optionInfo":{
            "Tibetan Refugee":{
                "en": (<>A <b>Tibetan refugee</b> who came to India before <b>1 January 1962</b> with the intention of 
                    permanently settling in India.</>),
                "hi": ""
            },
            "Person of Indian Origin (PIO)":{
                "en": (<>A <b>Person of Indian Origin (PIO)</b> who migrated from Pakistan, Myanmar (Burma), Sri Lanka, 
                    Kenya, Uganda, Tanzania, Zambia, Malawi, Zaire (now the Democratic Republic of the Congo), Ethiopia, or 
                    Vietnam with the intention of permanently settling in India. Candidates in categories 2–5 require a 
                    Certificate of Eligibility from the Government of India.</>),
                "hi": ""
            }
        }
    },
    "category":{

    }
};

const PersonalInfo = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  

    }
 };
 return (<div>
    <div><h5><b>1. {data?.label}</b></h5><hr/></div>
    <Form name={data?.id}  
        btnSubmit={{ align: 'right', btnType:'success', label:(<b>Next</b>), size: 12 }} 
        btnReset={{ btnType:'danger', label:(<b>Reset</b>), size: 11 }}
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
                        <Select name={PersonalInfoForm?.nationality?.id}  label={PersonalInfoForm?.nationality?.[lang+"Label"]} 
                            placeholder={PersonalInfoForm?.nationality?.[lang+"Placeholder"]}
                            value={eligibilityContextData?.data?.personalInfo?.nationality} fontSize="12"
                            options={PersonalInfoForm?.nationality?.[lang+"Options"]}
                            validation={{ required:{ value: true, errorMessage:"This is a Mandatory Field" }}} 
                            onChange={(event)=>setEligibilityContextData({...eligibilityContextData, 
                                        "data":{ "personalInfo":{ "nationality": event?.target?.value } } })} />
                        {(PersonalInfoForm?.nationality?.optionInfo?.[eligibilityContextData?.data?.personalInfo?.nationality]?.[lang]) 
                            && (<div style={{ fontSize:'11px', marginTop:'8px' }}>
                            <InfoIcon /> {PersonalInfoForm?.nationality?.optionInfo?.[eligibilityContextData?.data?.personalInfo?.nationality]?.[lang]}
                        </div>)}
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mtop15p">
                        <Select name="category" label="Your Category" placeholder="Select your Category" 
                            value={eligibilityContextData?.data?.personalInfo?.category}
                            options={["General (Unreserved / UR)","Economically Weaker Section (EWS)",
                                "Other Backward Class (OBC - Non-Creamy Layer)",
                                            "Scheduled Caste (SC)","Scheduled Tribe (ST)"]?.map((d,i)=>{
                                                return { id: d, label: d, value: d };
                                            })}
                                            fontSize="12"
                            validation={{ required:{ value: true, errorMessage:"This is a Mandatory Field" }}} />
                    </div>
                </Col>
            </Row>
        </ContainerFluid>
    </Form>
 </div>);
};

export default PersonalInfo;