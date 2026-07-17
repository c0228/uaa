import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Form, Icon } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

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
         {sections?.map((section,i)=>{
            return (<div key={i}>
               <Row>
                  <Col md={12}>
                     <div style={{ border:'1px solid #ccc', padding:'8px', backgroundColor:'#ccc', borderRadius:'8px', marginBottom:'15px' }}>
                        <b>{i+1}. {section[lang+"Label"]}</b>
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col md={6}>
                  
                  </Col>
                  <Col md={6}>
                  
                  </Col>
               </Row>
            </div>);
         })}
    </ContainerFluid>
    </div>
 </div>);
};

export default Review;