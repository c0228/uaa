import React from "react";

const Content30 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Where a survey is voluntary, users may choose not to participate.</div>
   <div className="mtop15p">Where applicable, users may also be provided with controls regarding:</div>
   <ul>
    {["Personalized advertising;", "Marketing communications;", "Location access;", "Cookies;", 
    "Certain data processing;", "Survey participation."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">The availability of particular controls may depend on the applicable law, 
      product design, and purpose of processing.</div>
 </div>);
};

export default Content30;