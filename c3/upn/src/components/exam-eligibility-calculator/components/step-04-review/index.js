import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Form, Icon, Button, Switch } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";
import { EligibilityCalculatorData } from "@Components/exam-eligibility-calculator/data.js";

const Review = ({ sections }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 useEffect(()=>{
  console.log("eligibilityContextData: ", eligibilityContextData);
 },[]);
 return (<div>
    <div><h5><b>4. {sections?.[3]?.[lang+"Label"]}</b></h5><hr/></div>
    <div className="mtop15p">
      <ContainerFluid>
         {sections?.filter((section)=>section?.id!=='review')?.map((section,i)=>{
            const label = section[lang+"Label"];
            const sectionId = section?.id;
            const sectionFields = EligibilityCalculatorData?.steps?.[sectionId]?.fields;
            const sectionFieldList = sectionFields && Object.keys(sectionFields);
            
            console.log("SectionId: ", sectionId);
            return (<div key={i}>
               <Row>
                  <Col md={12}>
                     <div style={{ border:'1px solid #ccc', padding:'8px', backgroundColor:'#ccc', borderRadius:'8px', marginBottom:'15px' }}>
                        <b>{i+1}. {label}</b>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col md={12}>
                     <div className="table-responsive">
                        <table className="table">
                           <tbody>
                              {sectionFieldList?.map((id,index)=>{
                                 const fieldLabel = sectionFields?.[id]?.[lang+"Label"];
                                 const fieldValue = eligibilityContextData?.data?.[sectionId]?.[id];
                                 return (<tr><td><b>{fieldLabel}</b></td><td><b>:</b></td><td>{fieldValue}</td></tr>);
                              })}
                           </tbody>
                        </table>
                     </div>
                  </Col>
               </Row>
            </div>);
         })}
    </ContainerFluid>
    </div>
    <div>
      <Row>
         <Col md={12}>
            <Switch type="radio" id="termsAndConditions" name="termsAndConditions" 
                    options={[{ id:1, label:"I confirm that the information and details provided above are true and correct to the best of my knowledge. I agree to proceed and check my eligibility for the UPSC Examination and accept the Terms and Conditions of the Eligibility Calculator.", value:"Yes"}]} 
                    disabled={false} />
         </Col>
      </Row>
    </div>
    <div align="right" className="mtop5p">
      <Row>
         <Col md={12}>
            <Button type="success" size={11} style={{ marginRight:'6px' }}>
               <b>{EligibilityCalculatorData?.steps?.calculateBtn?.[lang]}</b>
            </Button>
            <Button type="danger" size={11} style={{ marginRight:'5px' }}>
               <b>{EligibilityCalculatorData?.steps?.goBack?.[lang]}</b>
            </Button>
         </Col>
      </Row>
    </div>
 </div>);
};

export default Review;