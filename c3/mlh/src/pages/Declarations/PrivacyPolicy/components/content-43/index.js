import React from "react";

const Content43 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">We may process technical, account, behavioral, and other information to detect:</div>
   <ul>
    {["Fake accounts;", "Spam;", "Automated abuse;", "Fraud;", "Manipulation of surveys;", "Artificial voting or support;", 
    "Coordinated abuse;", "Account takeover;", "Malicious activity;", "Attempts to bypass Platform restrictions."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">This may involve automated systems and manual investigation.</div>
 </div>);
};

export default Content43;