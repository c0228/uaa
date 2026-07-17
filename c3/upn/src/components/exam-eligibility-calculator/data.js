import React from "react";
import { GetYearsBackDate } from "@Utils/DateFormatUtils.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";

export const DefaultEligibilityCalculator = {
    // "activeMenuId": "personalInfo",
    "activeMenuId": "review",
    "data":{
        "personalInfo": {
            "fullName": "Nellutla L N Rao",
            "dob": "2012-07-15",
            "gender": "Male",
            "nationality": "Indian",
            "category": "General (Unreserved / UR)"
        },
        "academics":{
            "highestQualification": "12th Pass/ Intermediate"
        },
        "reservations":{
            "pwBD": "Yes",
            "disabilityCategory": "Blindness / Low Vision",
            "disabilityPercentage": 40,
            "exServiceMan": "Yes",
            "defencePersonnelDisabled": "Yes",
            "cseAttempt": "Yes",
            "cseAttemptsUsed":"3"
        }
    }
};

export const EligibilityCalculatorData = {
 "enTitle": "UPSC Exam Eligibility Calculator",
 "hiTitle": "यूपीएससी परीक्षा पात्रता कैलकुलेटर",
 "enDesc": (<p>Find all UPSC exams you're eligible for in just a few steps - based on age, qualification, category, 
         and reservation criteria.<br/> Then, start your preparation with confidence.</p>),
 "hiDesc": (<p>उम्र, योग्यता, कैटेगरी और आरक्षण के आधार पर, बस कुछ ही स्टेप्स में उन सभी यूपीएससी परीक्षाओं का पता लगाएं जिनके लिए आप योग्य हैं।
        <br/> फिर, आत्मविश्वास के साथ अपनी तैयारी शुरू करें।</p>),
 "leftMenuData":[{  "id":"personalInfo", "enLabel":"Personal Information", "hiLabel":"व्यक्तिगत जानकारी" },
            { "id":"academics", "enLabel":"Education Qualification", "hiLabel":"शैक्षिक योग्यता" },
            { "id":"reservations", "enLabel":"Reservation & Relaxations", "hiLabel":"आरक्षण और छूट" },
            { "id":"review", "enLabel":"Review Details", "hiLabel":"समीक्षा का विवरण" }
        ],
 "steps":{
    "personalInfo":{
        "fields":{
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
            }
        }
    },
    "academics":{
        "fields":{
            "highestQualification": {
                "id": "highestQualification",
                "enLabel": "Your Higher Qualification",
                "hiLabel": "आपका उच्च योग्यता",
                "enPlaceholder": "Select Your Higher Qualification",
                "hiPlaceholder": "अपनी उच्च योग्यता चुनें",
                "enOptions":[{ id:'12th Pass/ Intermediate', label:'12th Pass/ Intermediate', value:'12th Pass/ Intermediate' },
                            { id:'Diploma', label:'Diploma', value:'Diploma' },
                            { id:'Graduate', label:'Graduate', value:'Graduate' },
                            { id:'Final Year Graduate', label:'Final Year Graduate', value:'Final Year Graduate' },
                            { id:'Engineering Graduate', label:'Engineering Graduate', value:'Engineering Graduate' },
                            { id:'MBBS', label:'MBBS', value:'MBBS' },
                            { id:'Post Graduate', label:'Post Graduate', value:'Post Graduate' }],
                "hiOptions":[{ id:'12th Pass/ Intermediate', label:'12वीं पास/इंटरमीडिएट', value:'12th Pass/ Intermediate' },
                            { id:'Diploma', label:'डिप्लोमा', value:'Diploma' },
                            { id:'Graduate', label:'ग्रेजुएट', value:'Graduate' },
                            { id:'Final Year Graduate', label:'अंतिम वर्ष ग्रेजुएट', value:'Final Year Graduate' },
                            { id:'Engineering Graduate', label:'इंजीनियरिंग ग्रेजुएट', value:'Engineering Graduate' },
                            { id:'MBBS', label:'एम.बी.बी.एस', value:'MBBS' },
                            { id:'Post Graduate', label:'पोस्ट ग्रेजुएट', value:'Post Graduate' }],
            },
        }
    },
    "reservations":{
        "enDesc": (<div style={{ fontSize:'12px' }}>Provide additional information, if applicable. These details help calculate age relaxation, attempt limits, and eligibility accurately.</div>),
        "hiDesc": (<div style={{ fontSize:'14px' }}>अगर लागू हो, तो अतिरिक्त जानकारी दें। ये विवरण उम्र में छूट, प्रयास की सीमा और पात्रता की सही-सही गणना करने में मदद करते हैं।</div>),
        "fields":{
            "pwBD":{
                "id":"pwBD",
                "enLabel":"Are you a Person with Benchmark Disability (PwBD)?",
                "hiLabel":"क्या आप बेंचमार्क दिव्यांगता (पी.डब्ल्यू.बी.डी) वाले व्यक्ति हैं?",
                "enOptions":[{ id:'Yes', label:"Yes", value:"Yes"},
                            { id:'No', label:"No", value:"No" }],
                "hiOptions":[{ id:'Yes', label:"हां", value:"Yes"},
                            { id:'No', label:"नहीं", value:"No" }]
            },
            "disabilityCategory":{
                "id":"disabilityCategory",
                "enLabel":"Disability Category",
                "hiLabel":"विकलांगता की श्रेणी",
                "enPlaceholder":"Select Disability",
                "hiPlaceholder":"विकलांगता चुनें",
                "enOptions":[{ id:'Blindness / Low Vision', label:'Blindness / Low Vision', value:'Blindness / Low Vision' },
                     { id:'Deaf / Hard of Hearing', label:'Deaf / Hard of Hearing', value:'Deaf / Hard of Hearing' },
                     { id:'Locomotor Disability', label:'Locomotor Disability', value:'Locomotor Disability' },
                     { id:'Autism', label:'Autism', value:'Autism' },
                     { id:'Intellectual Disability', label:'Intellectual Disability', value:'Intellectual Disability' },
                     { id:'Multiple Disabilities', label:'Multiple Disabilities', value:'Multiple Disabilities' },
                     { id:'Other', label:'Other', value:'Other' }],
                "hiOptions":[{ id:'Blindness / Low Vision', label:'अंधापन / कम दृष्टि', value:'Blindness / Low Vision' },
                     { id:'Deaf / Hard of Hearing', label:'बधिर / कम सुनने वाले', value:'Deaf / Hard of Hearing' },
                     { id:'Locomotor Disability', label:'चलने-फिरने में अक्षमता', value:'Locomotor Disability' },
                     { id:'Autism', label:'आत्मकेंद्रित', value:'Autism' },
                     { id:'Intellectual Disability', label:'बौद्धिक विकलांगता', value:'Intellectual Disability' },
                     { id:'Multiple Disabilities', label:'एक से अधिक विकलांगताएँ', value:'Multiple Disabilities' },
                     { id:'Other', label:'अन्य', value:'Other' }]
            },
            "disabilityPercentage":{
                "id":"disabilityPercentage",
                "enLabel":"Disability Percentage",
                "hiLabel":"विकलांगता प्रतिशतता",
                "enInfo":(<div style={{ fontSize:'11px' }}>
                        <div><InfoIcon/> Enter the percentage mentioned in your valid disability certificate.
                        PwBD benefits generally apply to benchmark disabilities of 40% or more, subject to UPSC notification 
                        requirements.</div>
                        <div>If &lt; 40%,  Based on the entered percentage, PwBD relaxation may not be applicable.</div>
                        <div>If &gt;= 40%, Benchmark disability criteria satisfied for PwBD consideration.</div>
                    </div>),
                "hiInfo":(<div style={{ fontSize:'13px' }}>
                        <div><InfoIcon/> अपने मान्य दिव्यांगता प्रमाण-पत्र में बताई गई प्रतिशतता दर्ज करें। पी.डब्ल्यू.बी.डी लाभ आम तौर पर 40% या उससे अधिक की 
                        बेंचमार्क दिव्यांगता पर लागू होते हैं, जो यूपीएससी की अधिसूचना की शर्तों के अधीन हैं।</div>
                        <div>अगर प्रतिशत 40% से कम है, तो दर्ज किए गए प्रतिशत के आधार पर पी.डब्ल्यू.बी.डी छूट लागू नहीं हो सकती है।</div>
                        <div>अगर विकलांगता 40% या उससे ज़्यादा है, तो पी.डब्ल्यू.बी.डी के तौर पर विचार किए जाने के लिए बेंचमार्क विकलांगता के मानदंड पूरे होते हैं।</div>
                    </div>)
            },
            "exServiceMan":{
                "id":"exServiceMan",
                "enLabel":"Are you an Ex-Serviceman?",
                "hiLabel":"क्या आप पूर्व सैनिक हैं?",
                "enOptions":[{ id:'Yes', label:"Yes", value:"Yes"},
                            { id:'No', label:"No", value:"No" }],
                "hiOptions":[{ id:'Yes', label:"हां", value:"Yes"},
                            { id:'No', label:"नहीं", value:"No" }],
                "enInfo":(<div style={{ fontSize:'11px'}}>
                        <InfoIcon /> Candidates belonging to the Ex-Serviceman category may be eligible for 
                        age relaxation in certain UPSC examinations, subject to the official notification.
                    </div>),
                "hiInfo":(<div style={{ fontSize:'13px'}}>
                        <InfoIcon /> पूर्व-सैनिक श्रेणी के उम्मीदवार, आधिकारिक अधिसूचना के अनुसार, कुछ यूपीएससी परीक्षाओं में 
                        आयु सीमा में छूट के पात्र हो सकते हैं।
                </div>)
            },
            "defencePersonnelDisabled":{
                "id":"defencePersonnelDisabled",
                "enLabel":"Are you Defence Personnel disabled during military operations?",
                "hiLabel":"क्या आप सैन्य अभियानों के दौरान दिव्यांग हुए रक्षाकर्मी हैं?",
                "enOptions":[{ id:'Yes', label:"Yes", value:"Yes"},
                            { id:'No', label:"No", value:"No" }],
                "hiOptions":[{ id:'Yes', label:"हां", value:"Yes"},
                            { id:'No', label:"नहीं", value:"No" }],
                "enInfo":(<div style={{ fontSize:'11px'}}>
                                <InfoIcon /> This information is used only to determine applicable age relaxation where provided in 
                                the official UPSC notification.
                        </div>),
                "hiInfo":(<div style={{ fontSize:'13px'}}>
                                <InfoIcon /> इस जानकारी का इस्तेमाल केवल यूपीएससी के आधिकारिक नोटिफ़िकेशन में दी गई उम्र में 
                                छूट (आयु सीमा में छूट) को तय करने के लिए किया जाता है।
                        </div>)
            },
            "cseAttempt":{
                "id":"cseAttempt",
                "enLabel":"Have you appeared for UPSC Civil Services Examination before?",
                "hiLabel":"क्या आप पहले यूपीएससी सिविल सेवा परीक्षा में शामिल हुए हैं?",
                "enOptions":[{ id:'Yes', label:"Yes", value:"Yes"},
                            { id:'No', label:"No", value:"No" }],
                "hiOptions":[{ id:'Yes', label:"हां", value:"Yes"},
                            { id:'No', label:"नहीं", value:"No" }]
            },
            "cseAttemptsUsed":{
                "id":"cseAttemptsUsed",
                "enLabel":"Attempts Used for CSE Examination?",
                "hiLabel":"सीएसई परीक्षा के लिए कितने प्रयास किए जा सकते हैं?",
                "enPlaceholder":"Select your Attempts",
                "hiPlaceholder":"अपने प्रयास चुनें",
                "enOptions":[{ id:'1_attempt', label: '1 Attempt', value:'1' },
                        { id:'2_attempts', label: '2 Attempts', value:'2' },
                        { id:'3_attempts', label: '3 Attempts', value:'3' },
                        { id:'4_attempts', label: '4 Attempts', value:'4' },
                        { id:'5_attempts', label: '5 Attempts', value:'5' },
                        { id:'6_attempts', label: '6 Attempts', value:'6' },
                        { id:'7_attempts', label: '7 Attempts', value:'7' },
                        { id:'8_attempts', label: '8 Attempts', value:'8' },
                        { id:'9_attempts', label: '9 Attempts', value:'9' }],
                "hiOptions":[{ id:'1_attempt', label: '1  प्रयास', value:'1' },
                        { id:'2_attempts', label: '2 प्रयास', value:'2' },
                        { id:'3_attempts', label: '3 प्रयास', value:'3' },
                        { id:'4_attempts', label: '4 प्रयास', value:'4' },
                        { id:'5_attempts', label: '5 प्रयास', value:'5' },
                        { id:'6_attempts', label: '6 प्रयास', value:'6' },
                        { id:'7_attempts', label: '7 प्रयास', value:'7' },
                        { id:'8_attempts', label: '8 प्रयास', value:'8' },
                        { id:'9_attempts', label: '9 प्रयास', value:'9' }]
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
    },
    "calculateBtn":{
        "en":"Calculate My Eligibility",
        "hi":"अपनी पात्रता की गणना करें"
    },
    "goBack":{
        "en":"Go Back",
        "hi":"वापस जाएं"
    }
 }
};