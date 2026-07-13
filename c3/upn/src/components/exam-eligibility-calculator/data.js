import { GetYearsBackDate } from "@Utils/DateFormatUtils.js";

export const EligibilityData = {
    "enTitle": "UPSC Exam Eligibility Calculator",
    "hiTitle": "यूपीएससी परीक्षा योग्यता कैलकुलेटर",
    "enDesc": "Find all UPSC exams you're eligible for in just a few steps - based on age, qualification, category, and reservation criteria. Then, start your preparation with confidence.",
    "hiDesc": "उम्र, योग्यता, कैटेगरी और आरक्षण के आधार पर, बस कुछ ही स्टेप्स में उन सभी यूपीएससी परीक्षाओं के बारे में जानें जिनके लिए आप योग्य हैं। इसके बाद, पूरे आत्मविश्वास के साथ अपनी तैयारी शुरू करें।",
    "data":[{
        "id": "personalInfo",
        "enLabel": "Personal Information",
        "hiLabel": "व्यक्तिगत जानकारी",
        "list":[{
                "id":"name",
                "enLabel":"Your Name",
                "hiLabel":"आपका नाम",
                "enPlaceholder":"Enter your Name",
                "hiPlaceholder":"अपना नाम दर्ज करें",
                "defaultValue":"Nellutla Lakshmi Narasimha Rao",
                "elementType": "textBox",
                "grid": {
                    "md": 12,
                }
            },{
                "id":"dob",
                "enLabel":"Your Date of Birth",
                "hiLabel":"आपका जन्म की तारीख",
                "defaultValue":"1991-10-15",
                "maxValue": GetYearsBackDate(14),
                "minValue": GetYearsBackDate(40),
                "elementType": "datePicker",
                "grid": {
                    "md": 6,
                }
            },{
                "id":"gender",
                "enLabel":"Your Gender",
                "hiLabel":"आपका लिंग",
                "enPlaceholder":"Select your Gender",
                "hiPlaceholder":"अपना लिंग चुनें",
                "defaultValue":"Male",
                "elementType": "select",
                "enOptions":[{ "id": 'male', "label": 'Male', "value": 'Male' },
                            { "id": 'female', "label": 'Female', "value": 'Female' }],
                "hiOptions":[{ "id": 'male', "label": 'पुरुष', "value": 'Male' },
                            { "id": 'female', "label": 'महिला', "value": 'Female' }],
                "grid": {
                    "md": 6,
                }
            },{
                "id":"nationality",
                "enLabel":"Your Nationality",
                "hiLabel":"आपका राष्ट्रीयता",
                "enPlaceholder":"Select your Nationality",
                "hiPlaceholder":"अपनी राष्ट्रीयता चुनें",
                "defaultValue":"Indian",
                "elementType": "select",
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
                "grid": {
                    "md": 6,
                }
            },{
                "id":"category",
                "enLabel":"Your Category",
                "hiLabel":"आपका वर्ग",
                "enPlaceholder":"Select your Category",
                "hiPlaceholder":"अपनी श्रेणी चुनें",
                "defaultValue":"General (Unreserved / UR)",
                "elementType": "select",
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
                "grid": {
                    "md": 6,
                }
            }]
    },{
        "id": "academics",
        "enLabel": "Academics",
        "hiLabel": "शैक्षिक अध्ययन",
        "list":[{
                "id":"highestQualification",
                "enLabel":"Your Higher Qualification",
                "hiLabel":"आपका उच्च योग्यता",
                "defaultValue":"12th Pass/ Intermediate",
                "elementType": "select",
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
                "grid": {
                    "md": 12,
                }
            }]
    },{
        "id": "reservations",
        "enLabel": "Reservations & Relaxations",
        "hiLabel": "आरक्षण और छूट",
        "list":[{
                "id":"pwBD",
                "enLabel":"",
                "hiLabel":"",
                "defaultValue":"Yes",
                "elementType": "Switch"
            },{
                "id":"disabilityCategory",
                "enLabel":"",
                "hiLabel":"",
                "defaultValue":"Multiple Disabilities",
                "elementType": "Select"
            },{
                "id":"disabilityPercentage",
                "enLabel":"",
                "hiLabel":"",
                "defaultValue": 40,
                "elementType": "Range"
            },{
                "id":"exServiceMan",
                "enLabel":"",
                "hiLabel":"",
                "defaultValue":"Yes",
                "elementType": "Switch"
            },{
                "id":"defencePersonnelDisabled",
                "enLabel":"",
                "hiLabel":"",
                "defaultValue":"Yes",
                "elementType": "Switch"
            },{
                "id":"cseAttempt",
                "enLabel":"",
                "hiLabel":"",
                "defaultValue":"Yes",
                "elementType": "Switch"
            },{
                "id":"cseAttemptsUsed",
                "enLabel":"",
                "hiLabel":"",
                "defaultValue":"1",
                "elementType": "Select"
            }]
    }]
};