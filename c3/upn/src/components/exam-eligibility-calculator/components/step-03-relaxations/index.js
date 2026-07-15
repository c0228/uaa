import React from "react";
import { useParams } from "react-router-dom";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const RelaxationForm = {
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
            "hiLabel":"विकलांगता प्रतिशतता"
         },
   "exServiceMan":{
            "id":"exServiceMan",
            "enLabel":"Are you an Ex-Serviceman?",
            "hiLabel":"क्या आप पूर्व सैनिक हैं?",
            "enOptions":[{ id:'Yes', label:"Yes", value:"Yes"},
                            { id:'No', label:"No", value:"No" }],
            "hiOptions":[{ id:'Yes', label:"हां", value:"Yes"},
                            { id:'No', label:"नहीं", value:"No" }]
         },
   "defencePersonnelDisabled":{
                "id":"defencePersonnelDisabled",
                "enLabel":"Are you Defence Personnel disabled during military operations?",
                "hiLabel":"क्या आप सैन्य अभियानों के दौरान दिव्यांग हुए रक्षाकर्मी हैं?",
                "enOptions":[{ id:'Yes', label:"Yes", value:"Yes"},
                            { id:'No', label:"No", value:"No" }],
                "hiOptions":[{ id:'Yes', label:"हां", value:"Yes"},
                            { id:'No', label:"नहीं", value:"No" }]
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
};

const Relaxations = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 return (<div>
    <div><h5><b>3. {data?.[lang+"Label"]}</b></h5><hr/></div>
 </div>);
};

export default Relaxations;