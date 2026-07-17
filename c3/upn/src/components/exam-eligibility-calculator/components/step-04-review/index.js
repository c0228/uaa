import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContainerFluid, Row, Col, Form, Icon } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const Review = ({ data }) =>{
 const { lang } = useParams();
  const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 useEffect(()=>{
  console.log("eligibilityContextData: ", eligibilityContextData);
 },[]);
 return (<div>
    <div><h5><b>4. {data?.[lang+"Label"]}</b></h5><hr/></div>
    <div className="mtop15p">
      <ContainerFluid>
      <Row>
         <Col md={12}>
            <div><h5 style={{ border:'1px solid #ccc', padding:'5px' }}><b>1. Personal Information</b></h5></div>
         </Col>
      </Row>
    </ContainerFluid>
    </div>
 </div>);
};

export default Review;