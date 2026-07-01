import React from "react";

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
    "label":"Review"
}];

const FormLeftMenu = ({ activeId }) =>{
 return (<div>
         <ul class="nav nav-pills flex-column">
             {LeftMenuData?.map((m,i)=>{
                 return (<li key={i} class="nav-item">
                 <a class={(activeId===m?.id)?"nav-link active":"nav-link"} href="#"><b>{i+1}. {m?.label}</b></a>
             </li>);
             })}
         </ul>
 </div>);
};

export default FormLeftMenu;