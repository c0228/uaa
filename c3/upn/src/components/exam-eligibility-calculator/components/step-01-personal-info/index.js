import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Form, TextBox, DateTimePicker, Select, Icon } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { GetYearsBackDate } from "@Utils/DateFormatUtils.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";

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
                "hi": "एक तिब्बती शरणार्थी जो 1 जनवरी 1962 से पहले भारत में स्थायी रूप से बसने के इरादे से भारत आया था।"
            },
            "Person of Indian Origin (PIO)":{
                "en": (<>A <b>Person of Indian Origin (PIO)</b> who migrated from Pakistan, Myanmar (Burma), Sri Lanka, 
                    Kenya, Uganda, Tanzania, Zambia, Malawi, Zaire (now the Democratic Republic of the Congo), Ethiopia, or 
                    Vietnam with the intention of permanently settling in India. Candidates in categories 2–5 require a 
                    Certificate of Eligibility from the Government of India.</>),
                "hi": "भारतीय मूल का ऐसा व्यक्ति (PIO) जो पाकिस्तान, म्यांमार (बर्मा), श्रीलंका, केन्या, युगांडा, तंजानिया, जाम्बिया, मलावी, "+
                    " ज़ैरे (अब डेमोक्रेटिक रिपब्लिक ऑफ़ कांगो), इथियोपिया या वियतनाम से भारत में स्थायी रूप से बसने के इरादे से आया हो। कैटेगरी 2-5 में "+
                    "आने वाले उम्मीदवारों को भारत सरकार से पात्रता प्रमाण-पत्र (Certificate of Eligibility) की आवश्यकता होती है।"
            }
        }
    },
    "category":{
        "id":"category",
        "enLabel":"Your Category",
        "hiLabel":"आपका वर्ग",
        "enPlaceholder":"Select your Category",
        "hiPlaceholder":"अपनी श्रेणी चुनें",
        "enOptions":[{ id:'General (Unreserved / UR)', label:'General (Unreserved / UR)', value:'General (Unreserved / UR)' },
                { id:'Economically Weaker Section (EWS)', label:'Economically Weaker Section (EWS)', value:'Economically Weaker Section (EWS)' },
                { id:'Other Backward Class (OBC - Non-Creamy Layer)', label:'Other Backward Class (OBC - Non-Creamy Layer)', value:'Other Backward Class (OBC - Non-Creamy Layer)' },
                { id:'Scheduled Caste (SC)', label:'Scheduled Caste (SC)', value:'Scheduled Caste (SC)' },
                { id:'Scheduled Tribe (ST)', label:'Scheduled Tribe (ST)', value:'Scheduled Tribe (ST)' }],
        "hiOptions":[{ id:'General (Unreserved / UR)', label:'सामान्य (अनारक्षित / यू.आर)', value:'General (Unreserved / UR)' },
                { id:'Economically Weaker Section (EWS)', label:'आर्थिक रूप से कमजोर वर्ग (ई.डब्ल्यू.एस)', value:'Economically Weaker Section (EWS)' },
                { id:'Other Backward Class (OBC - Non-Creamy Layer)', label:'अन्य पिछड़ा वर्ग (ओ.बी.सी - नॉन-क्रीमी लेयर)', value:'Other Backward Class (OBC - Non-Creamy Layer)' },
                { id:'Scheduled Caste (SC)', label:'अनुसूचित जाति (एस.सी)', value:'Scheduled Caste (SC)' },
                { id:'Scheduled Tribe (ST)', label:'अनुसूचित जनजाति (एस.टी)', value:'Scheduled Tribe (ST)' }],
        "optionInfo":{
            "General (Unreserved / UR)":{
                "en": (<><b>General (Unreserved / UR) -</b> No reservation</>),
                "hi":"सामान्य (अनारक्षित / यू.आर) - कोई आरक्षण नहीं"
            },
            "Economically Weaker Section (EWS)":{
                "en": (<><b>Economically Weaker Sections (EWS) -</b> Reservation for economically weaker candidates who are not covered 
                    under SC, ST, or OBC reservations.</>),
                "hi": "आर्थिक रूप से कमजोर वर्ग (ई.डब्ल्यू.एस) - आर्थिक रूप से कमजोर उन उम्मीदवारों के लिए आरक्षण जो एस.सी, एस.टी या ओ.बी.सी आरक्षण के दायरे में नहीं आते हैं।"
            },
            "Other Backward Class (OBC - Non-Creamy Layer)":{
                "en": (<><b>Other Backward Classes (OBC – Non-Creamy Layer) -</b> Reservation for eligible OBC candidates who fall 
                    under the non-creamy layer.</>),
                "hi": "अन्य पिछड़ा वर्ग (ओ.बी.सी – नॉन-क्रीमी लेयर) - नॉन-क्रीमी लेयर के अंतर्गत आने वाले पात्र ओ.बी.सी उम्मीदवारों के लिए आरक्षण।"
            },
            "Scheduled Caste (SC)":{
                "en": (<><b>Scheduled Castes (SC) -</b> Reservation for candidates belonging to Scheduled Castes.</>),
                "hi": "अनुसूचित जातियाँ (एस.सी) - अनुसूचित जातियों के उम्मीदवारों के लिए आरक्षण।"
            },
            "Scheduled Tribe (ST)":{
                "en": (<><b>Scheduled Tribes (ST) -</b> Reservation for candidates belonging to Scheduled Tribes.</>),
                "hi": "अनुसूचित जनजातियाँ (एस.टी) - अनुसूचित जनजाति के उम्मीदवारों के लिए आरक्षण।"
            }
        }
    },
    "nextBtn":{
        "en":"Next Step",
        "hi":"अगला कदम"
    },
    "resetBtn":{
        "en":"Reset Form",
        "hi":"फ़ॉर्म रीसेट करें"
    }
};

const PersonalInfo = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 useEffect(()=>{ console.log("eligibilityContextData [PersonalInfo]: ",eligibilityContextData); },[eligibilityContextData]);
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
        console.log("isValidForm: ", isValidForm, "form: ", form);
        const formData = form?.["personalInfo"];
        let eligibilityData = {...eligibilityContextData};
            eligibilityData.leftMenuActiveId = 'academics';
            eligibilityData.data.personalInfo = {
                fullName: formData?.fullName?.value,
                dob: formData?.dob?.value,
                gender: formData?.gender?.value,
                nationality: formData?.nationality?.value,
                category: formData?.category?.value,
            };
       setEligibilityContextData(eligibilityData);
    }
 };
 return (<div>
    <div><h5><b>1. {data?.[lang+"Label"]}</b></h5><hr/></div>
    <Form name={data?.id}  
        btnSubmit={{ align: 'right', btnType:'success', label:(<b>{PersonalInfoForm?.nextBtn?.[lang]}</b>), size: 12 }} 
        btnReset={{ btnType:'danger', label:(<b>{PersonalInfoForm?.resetBtn?.[lang]}</b>), size: 11 }}
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