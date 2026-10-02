import React from "react";

const Content25 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">We may use third-party companies and service providers to operate MyLocalHook.</div>
   <div className="mtop15p">These providers may assist with:</div>
   <ul>
    {["Cloud hosting;", "Database services;", "Authentication;", "Analytics;", "Advertising;", 
    "Email;", "Security;", "Content delivery;", "Payment processing;", "Customer support;", "Data storage;",
      "Fraud prevention;", "Error monitoring;", "Application performance;", "Survey functionality."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Such providers may process information on our behalf and may be contractually or 
      legally restricted from using information for unauthorized purposes.</div>
 </div>);
};

export default Content25;