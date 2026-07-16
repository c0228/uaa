import React from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Select, Range, Switch, Button, Form } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";

const DisplayExServiceManForm = {
 "exServiceMan":{
    "id":"exServiceMan",
    "enLabel":"Are you an Ex-Serviceman?",
    "hiLabel":"क्या आप पूर्व सैनिक हैं?",
    "enOptions":[{ id:'Yes', label:"Yes", value:"Yes"},
                { id:'No', label:"No", value:"No" }],
    "hiOptions":[{ id:'Yes', label:"हां", value:"Yes"},
                { id:'No', label:"नहीं", value:"No" }],
    "enInfo":(<>
            <InfoIcon /> Candidates belonging to the Ex-Serviceman category may be eligible for 
            age relaxation in certain UPSC examinations, subject to the official notification.
        </>),
    "hiInfo":(<>
            <InfoIcon /> पूर्व-सैनिक श्रेणी के उम्मीदवार, आधिकारिक अधिसूचना के अनुसार, कुछ यूपीएससी परीक्षाओं में 
            आयु सीमा में छूट के पात्र हो सकते हैं।
    </>)
 },
};

const DisplayExServiceMan = () =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 return (<Row>
    <Col md={12}>
        <div className="mt-3">
            <Switch type="radio" id={DisplayExServiceManForm?.exServiceMan?.id} 
                name={DisplayExServiceManForm?.exServiceMan?.name}  layout="horizontal"
                label={DisplayExServiceManForm?.exServiceMan?.[lang+"Label"]}
                value={eligibilityContextData?.data?.reservations?.exServiceMan}
                options={DisplayExServiceManForm?.exServiceMan?.[lang+"Options"]}
                validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
        </div>
    </Col>
    <Col md={12}>
        <div style={{ fontSize:'11px'}}>{DisplayExServiceManForm?.exServiceMan?.[lang+"Info"]}</div>
    </Col>
 </Row>);
};

export default DisplayExServiceMan;