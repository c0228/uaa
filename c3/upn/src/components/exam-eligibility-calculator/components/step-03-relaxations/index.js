import React from "react";
import { useParams } from "react-router-dom";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const Relaxations = ({ data }) =>{
 const { lang } = useParams();
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 return (<div>
    <div><h5><b>3. {data?.[lang+"Label"]}</b></h5><hr/></div>
 </div>);
};

export default Relaxations;