import React from "react";

const Content28 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">We retain information for as long as reasonably necessary for the purposes described in this 
      Privacy Policy, unless a longer retention period is required or permitted by la</div>
   <div className="mtop15p">Retention periods may depend on:</div>
   <ul>
    {["The nature of the information;", "The purpose for which it was collected;", "Legal obligations;", 
    "Security requirements;", "Dispute resolution;", "Fraud prevention;", "Regulatory requirements;", 
    "Backup and technical requirements."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Some information may remain in backups for a limited period after deletion.</div>
 </div>);
};

export default Content28;