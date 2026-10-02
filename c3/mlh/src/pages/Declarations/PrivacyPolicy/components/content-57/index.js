import React from "react";

const Content57 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook is designed to give users meaningful choices where required by law.</div>
   <div className="mtop15p">Depending on the feature, users may be able to:</div>
   <ul>
    {["Choose whether to provide optional information;", "Choose whether to participate in optional surveys;", 
    "Control location permissions;", "Manage certain communication preferences;", "Manage certain advertising preferences;", 
    "Edit profile information;", "Delete their account;", "Request access or correction of personal information;", 
    "Withdraw consent where applicable."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Some information is necessary to operate certain features. If you choose not to 
      provide required information, some Platform functionality may not be available.</div>
 </div>);
};

export default Content57;