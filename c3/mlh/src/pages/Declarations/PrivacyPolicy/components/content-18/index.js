import React from "react";

const Content18 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">When you use MyLocalHook, certain technical information may automatically be collected.</div>
   <div className="mtop15p">This may include:</div>
   <ul>
    {["IP address;", "Browser type;", "Operating system;", "Device type;", "Device identifiers;", 
    "Application version;", "Language;", "Time zone;", "Date and time of access;", "Pages or screens viewed;",
    "Features used;", "Referring pages;", "Interaction information;", "Crash information;", "Performance information;",
    "Log information."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">We may use this information to maintain, secure, analyze, and improve the Platform.</div>
 </div>);
};

export default Content18;