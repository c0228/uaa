import React from "react";

const Content26 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">We may disclose information where reasonably necessary to:</div>
   <ul>
    {["Comply with applicable law;", "Respond to valid legal processes;", "Respond to governmental authorities;", 
    "Investigate suspected unlawful activity;", "Prevent fraud;", "Protect users;", "Protect the Platform;", 
    "Protect our rights;", "Protect the safety of individuals;", "Enforce our agreements and policies."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">We may also disclose information where permitted or required by applicable law.</div>
 </div>);
};

export default Content26;