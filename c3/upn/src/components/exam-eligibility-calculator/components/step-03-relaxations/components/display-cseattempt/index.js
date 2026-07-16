import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";

const DisplayCSEAttemptForm = {
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
};

const DisplayCSEAttempt = () =>{
  const { lang } = useParams();
  const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
  return (<>
  <Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id={DisplayCSEAttemptForm?.cseAttempt?.id} 
                name={DisplayCSEAttemptForm?.cseAttempt?.id}  layout="horizontal"
                label={DisplayCSEAttemptForm?.cseAttempt?.[lang+"Label"]} 
                value={eligibilityContextData?.data?.reservations?.cseAttempt}
                options={DisplayCSEAttemptForm?.cseAttempt?.[lang+"Options"]} 
                validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
        </div>
    </Col>
  </Row>
  {eligibilityContextData?.data?.reservations?.cseAttempt==='Yes' && (<>
            <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Select name={DisplayCSEAttemptForm?.cseAttemptsUsed?.id} 
                    label={DisplayCSEAttemptForm?.cseAttemptsUsed?.[lang+"Label"]}  
                    placeholder={DisplayCSEAttemptForm?.cseAttemptsUsed?.[lang+"Placeholder"]}  
                    value={eligibilityContextData?.data?.reservations?.cseAttemptsUsed}
                    options={DisplayCSEAttemptForm?.cseAttemptsUsed?.[lang+"Options"]} 
                    validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
                </div>
            </Col>
    </Row>
    </>)}
  </>);
};

export default DisplayCSEAttempt;