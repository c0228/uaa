import React from "react";
import { getEligibilityContext } from "@Components/exam-eligibility-calculator/index.js";

const Menus = ({ data }) =>{
 const { eligibilityContextData, setEligibilityContextData } = getEligibilityContext();
 const activeId = eligibilityContextData?.activeMenuId ?? "personal-information";
 const menuHandler = (menuId) =>{
    const currentStepIndex = data.findIndex((item) => item.id === activeId);
    const clickedStepIndex = data.findIndex((item) => item.id === menuId);
    if(clickedStepIndex <= currentStepIndex) {
        setEligibilityContextData({ activeMenuId: menuId });
    }
 };
 return (<div>
         <ul className="nav nav-pills flex-column">
             {data?.map((m,i)=>{
                 return (<li key={i} className="nav-item" onClick={()=>menuHandler(m?.id)}>
                 <a className={(activeId===m?.id)?"nav-link active":"nav-link"} href="#upsc-eligibility-calculator">
                    <b>{i+1}. {m?.label}</b></a>
             </li>);
             })}
         </ul>
 </div>);
};

export default Menus;