import React from "react";

const Content44 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Because MyLocalHook may publish survey results and community insights, we may take measures to 
      identify suspicious or fraudulent survey participation.</div>
   <div className="mtop15p">For example, we may identify unusual patterns involving:</div>
   <ul>
    {["Multiple accounts;", "Automated submissions;", "Repeated submissions;", "Coordinated activity;", "Bot activity;", 
    "Other suspicious behavior."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">We may exclude suspicious responses from certain results where reasonably necessary to protect survey 
      integrity.</div>

   










 </div>);
};

export default Content44;