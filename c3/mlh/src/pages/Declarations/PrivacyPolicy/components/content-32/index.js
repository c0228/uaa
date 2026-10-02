import React from "react";

const Content32 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Users should not provide sensitive personal information through public posts, surveys, comments, 
      profiles, or other features unless MyLocalHook specifically requests such information and provides appropriate notice.</div>
   <div className="mtop15p">Depending on applicable law, sensitive information may include information relating to:</div>
   <ul>
    {["Health;", "Financial information;", "Biometric information;", "Authentication credentials;", "Precise location;", 
    "Other categories protected by law."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Where MyLocalHook needs to collect information requiring heightened legal protections, we will 
      implement appropriate notices, consent mechanisms, and safeguards as required by applicable law.</div>
 </div>);
};

export default Content32;