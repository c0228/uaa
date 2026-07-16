import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import DisplayPwBD from "./components/display-pwbd/index.js";
import DisplayExServiceMan from "./components/display-exserviceman/index.js";
import DisplayDefencePersonnelDisabled from "./components/display-defenceperdisabled/index.js";
import DisplayCSEAttempt from "./components/display-cseattempt/index.js";

const RelaxationForm = {
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
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){  
       setEligibilityContextData({...eligibilityContextData, activeMenuId: 'review' });
    }
 };
 return (<div>
    <div><h5><b>3. {data?.[lang+"Label"]}</b></h5><hr/></div>
    <Form name="ReservationsAndRelaxations"  
        btnSubmit={{ align: 'right', btnType:'success', label:(<b>Next</b>), size: 12 }} 
        btnReset={{ btnType:'danger', label:(<b>Reset</b>), size: 11 }}
        onSubmit={NextHandler}>
    <ContainerFluid>
        <Row>
            <Col md={12}>
                <div className="mt-2" style={{ fontSize:'13px' }}><p>Provide additional information, if applicable. These details help 
                    calculate age relaxation, attempt limits, and eligibility accurately.</p></div>
            </Col>
        </Row>
        <div className="list-group">
            <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                <DisplayPwBD data={RelaxationForm?.pwBD} />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                <DisplayExServiceMan />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                <DisplayDefencePersonnelDisabled />
            </div>
            <div className="list-group-item" style={{ backgroundColor:'#eee' }}>
                <DisplayCSEAttempt />
            </div>
        </div>
    </ContainerFluid>
    </Form>
 </div>);
};

export default Relaxations;