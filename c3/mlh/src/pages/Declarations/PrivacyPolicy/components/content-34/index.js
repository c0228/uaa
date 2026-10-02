import React from "react";

const Content34 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">We use reasonable technical and organizational measures designed to protect information from 
      unauthorized access, alteration, disclosure, misuse, loss, or destruction.</div>
   <div className="mtop15p">Security measures may include:</div>
   <ul>
    {["Access controls;", "Authentication mechanisms;", "Encryption where appropriate;", "Secure communications;", 
    "Logging;", "Monitoring;", "Backup controls;", "Infrastructure security;", "Administrative safeguards."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">However, no internet-based service can guarantee absolute security.</div>
   <div className="mtop15p">Users should also protect their account credentials and notify us if they suspect 
      unauthorized access.</div>
 </div>);
};

export default Content34;