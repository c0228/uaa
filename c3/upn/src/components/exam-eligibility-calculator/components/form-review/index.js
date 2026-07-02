import React, { useEffect } from "react";
import {ContainerFluid, Row, Col, DateTimePicker, Select, Button, Form  } from "e-ui-react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const FormReview = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 useEffect(()=>{
    console.log("eligibilityContextData: ", eligibilityContextData);
 },[eligibilityContextData]);
 return (<div>
  <div><h5><b>4. Review</b></h5><hr/></div>
    
 </div>);
};

export default FormReview;