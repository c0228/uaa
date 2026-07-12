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
                "elementType": "select"
            },{
                "id":"category",
                "enLabel":"Your Category",
                "hiLabel":"आपका वर्ग",
                "enPlaceholder":"Select your Category",
                "hiPlaceholder":"अपनी श्रेणी चुनें",
                "defaultValue":"General (Unreserved / UR)",
                "elementType": "select"
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
                "elementType": "Select"
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