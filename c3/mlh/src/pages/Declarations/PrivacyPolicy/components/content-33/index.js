import React from "react";

const Content33 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook cannot guarantee privacy for information that a user voluntarily makes public.</div>
   <div className="mtop15p">Before publishing information, users should consider whether they are comfortable with it being:</div>
   <ul>
    {["Viewed by other users;", "Shared;", "Screenshotted;", "Copied;", "Reposted;", "Indexed;", 
    "Discussed by others."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}
   </ul>
   <div className="mtop15p">Do not publish passwords, financial credentials, government 
      identification numbers, private contact information, or other sensitive information in publicly 
      accessible areas.</div>
 </div>);
};

export default Content33;