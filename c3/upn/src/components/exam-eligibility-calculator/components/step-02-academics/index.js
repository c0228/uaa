import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Form, Select } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const AcademicsForm = {
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
 "nextBtn":{
   "en":"Next Step",
   "hi":"अगला कदम"
 },
 "resetBtn":{
   "en":"Reset Form",
   "hi":"फ़ॉर्म रीसेट करें"
 }
};

const Academics = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 useEffect(()=>{ console.log("eligibilityContextData [PersonalInfo]: ",eligibilityContextData); },[eligibilityContextData]);
 const NextHandler = async(form, isValidForm, setFormMode) =>{
    if(isValidForm){
       console.log("isValidForm: ", isValidForm, "form: ", form);
        const formData = form?.["academics"];
        let eligibilityData = {...eligibilityContextData};
            eligibilityData.leftMenuActiveId = 'reservations';
            eligibilityData.data.academics = {
                highestQualification: formData?.highestQualification?.value
            };
       setEligibilityContextData(eligibilityData);
    }
 };
 return (<div>
   <div><h5><b>2. {data?.[lang+"Label"]}</b></h5><hr/></div>
   <Form name="EduQualificationForm"  
         btnSubmit={{ align: 'right', btnType:'success', label:(<b>{AcademicsForm?.nextBtn?.[lang]}</b>), size: 12 }} 
         btnReset={{ btnType:'danger', label:(<b>{AcademicsForm?.resetBtn?.[lang]}</b>), size: 11 }}
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
                       validation={{ required:{ value: true, errorMessage:"[This is a Mandatory Field]" } }} />
               </div>
           </Col>
       </Row>
     </ContainerFluid>
     </Form>
 </div>);
};

export default Academics;