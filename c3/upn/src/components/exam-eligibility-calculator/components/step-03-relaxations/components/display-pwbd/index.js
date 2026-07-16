import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Switch, Select, Range } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { InfoIcon } from "@Components/exam-eligibility-calculator/commons.js";

const DisplayPwBDForm = {
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
};

const DisplayPwBD = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 return (<>
        <Row>
        <Col md={12}>
                <div className="mt-2">
                    <Switch type="radio" id={DisplayPwBDForm?.pwBD?.id} name={DisplayPwBDForm?.pwBD?.id}  layout="horizontal"
                        label={DisplayPwBDForm?.pwBD?.[lang+"Label"]} options={DisplayPwBDForm?.pwBD?.[lang+"Options"]} 
                        value={eligibilityContextData?.data?.reservations?.pwBD}
                        validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
                </div>
        </Col>
        </Row>
        {eligibilityContextData?.data?.reservations?.pwBD==='Yes' && (<>
            <Row>
            <Col md={6}>
                <div className="mt-3">
                    <Select name={DisplayPwBDForm?.disabilityCategory?.id} 
                        label={DisplayPwBDForm?.disabilityCategory?.[lang+"Label"]} 
                        placeholder={DisplayPwBDForm?.disabilityCategory?.[lang+"Placeholder"]}
                    value={eligibilityContextData?.data?.reservations?.disabilityCategory}
                    options={DisplayPwBDForm?.disabilityCategory?.[lang+"Options"]} 
                    validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
                </div>
            </Col>
            <Col md={6}>
                <div className="mt-3">
                    <Range name={DisplayPwBDForm?.disabilityPercentage?.id} 
                        label={DisplayPwBDForm?.disabilityPercentage?.[lang+"Label"]}
                        value={eligibilityContextData?.data?.reservations?.disabilityPercentage}
                        validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <div>{DisplayPwBDForm?.disabilityPercentage?.[lang+"Info"]}</div>
            </Col>
        </Row>
    </>)}
 </>);
};

export default DisplayPwBD;