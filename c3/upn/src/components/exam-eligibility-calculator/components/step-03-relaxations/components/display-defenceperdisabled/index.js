import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form, Icon } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";

const DisplayDefencePersonnelDisabledForm  = {
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
};

const DisplayDefencePersonnelDisabled = () =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 return (<Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id={DisplayDefencePersonnelDisabledForm?.defencePersonnelDisabled?.id} 
                name={DisplayDefencePersonnelDisabledForm?.defencePersonnelDisabled?.id} layout="horizontal"
                label={DisplayDefencePersonnelDisabledForm?.defencePersonnelDisabled?.[lang+"Label"]}
                value={eligibilityContextData?.data?.reservations?.defencePersonnelDisabled}
                options={DisplayDefencePersonnelDisabledForm?.defencePersonnelDisabled?.[lang+"Options"]} 
                validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
        </div>
    </Col>
    <Col md={12}>
        <div>{DisplayDefencePersonnelDisabledForm?.defencePersonnelDisabled?.[lang+"Info"]}</div>
    </Col>
  </Row>);
};

export default DisplayDefencePersonnelDisabled;