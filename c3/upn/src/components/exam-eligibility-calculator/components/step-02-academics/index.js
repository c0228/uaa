import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Form, Select } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { EligibilityCalculatorData } from "@Components/exam-eligibility-calculator/data.js";

const Academics = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const AcademicsForm = EligibilityCalculatorData?.steps?.academics?.fields;
 const FormSteps = EligibilityCalculatorData?.steps;
 const [specificationOptions, setSpecificationsOptions] = useState([]);
 useEffect(()=>{ console.log("eligibilityContextData [PersonalInfo]: ",eligibilityContextData); },[eligibilityContextData]);
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){
       console.log("isValidForm: ", isValidForm, "form: ", form);
        const formData = form?.["academics"];
        let eligibilityData = {...eligibilityContextData};
            eligibilityData.activeMenuId = 'reservations';
            eligibilityData.data.academics = {
                highestQualification: formData?.highestQualification?.value,
                specification: formData?.specification?.value
            };
       setEligibilityContextData(eligibilityData);
    }
 };
 return (<div>
   <div><h5><b>2. {data?.[lang+"Label"]}</b></h5><hr/></div>
   <Form name={data?.id}  
         btnSubmit={{ align: 'right', btnType:'success', label:(<b>{FormSteps?.nextBtn?.[lang]}</b>), size: 12 }} 
         btnReset={{ btnType:'danger', label:(<b>{FormSteps?.resetBtn?.[lang]}</b>), size: 11 }}
         onSubmit={NextHandler}>
     <ContainerFluid>
       <Row>
           <Col md={6}>
               <div className="mt-3">
                    <Select name={AcademicsForm?.highestQualification?.id} 
                        label={AcademicsForm?.highestQualification?.[lang+"Label"]}
                       placeholder={AcademicsForm?.highestQualification?.[lang+"Placeholder"]}
                       value={eligibilityContextData?.data?.academics?.highestQualification}
                       options={AcademicsForm?.highestQualification?.[lang+"Options"]} fontSize="12" 
                       validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} 
                       onChange={(event)=>{
                            let eligibilityData = {...eligibilityContextData};
                            eligibilityData.data.academics.highestQualification =  event?.target?.value;
                            eligibilityData.data.academics.specification = '';
                            setEligibilityContextData(eligibilityData);
                        }} />
               </div>
           </Col>
       </Row>
       <Row>
           <Col md={6}>
               <div className="mt-3">
                    <Select name={AcademicsForm?.specification?.id} 
                        label={AcademicsForm?.specification?.[lang+"Label"]}
                       placeholder={AcademicsForm?.specification?.[lang+"Placeholder"]}
                       value={eligibilityContextData?.data?.academics?.specification}
                       options={AcademicsForm?.specification?.options(eligibilityContextData?.data?.academics?.highestQualification, lang)} fontSize="12" 
                       validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
               </div>
           </Col>
       </Row>
     </ContainerFluid>
     </Form>
 </div>);
};

export default Academics;