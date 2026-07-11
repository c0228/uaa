import React from "react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const LeftMenuData = [{
    "id":"personal-information",
    "label":"Personal Information"
},{
    "id":"edu-qualification",
    "label":"Education Qualification"
},{
    "id":"reservation-and-relaxations",
    "label":"Reservation & Relaxations"
},{
    "id":"review",
    "label":"Review Details"
}];

const FormLeftMenu = () =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const activeId = eligibilityContextData?.leftMenuActiveId ?? "personal-information";
 const menuHandler = (menuId) =>{
    const currentStepIndex = LeftMenuData.findIndex((item) => item.id === activeId);
    const clickedStepIndex = LeftMenuData.findIndex((item) => item.id === menuId);
    if(clickedStepIndex <= currentStepIndex) {
        setEligibilityContextData({ leftMenuActiveId: menuId });
    }
 };
 return (<div>
         <ul className="nav nav-pills flex-column">
             {LeftMenuData?.map((m,i)=>{
                 return (<li key={i} className="nav-item" onClick={()=>menuHandler(m?.id)}>
                 <a className={(activeId===m?.id)?"nav-link active":"nav-link"} href="#upsc-eligibility-calculator"><b>{i+1}. {m?.label}</b></a>
             </li>);
             })}
         </ul>
 </div>);
};

export default FormLeftMenu;