import React from "react";

const Content19 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may use cookies, local storage, session storage, pixels, SDKs, tags, and similar technologies.</div>
   <div className="mtop15p">These technologies may be used for:</div>
   <ul>
    {["Login sessions;", "Authentication;", "Security;", "Remembering preferences;", "Personalization;", 
    "Analytics;", "Performance monitoring;", "Advertising;", "Fraud prevention;", "Measuring campaigns;", 
    "Understanding Platform usage."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Users may be able to control cookies through their browser or device settings.</div>
   <div className="mtop15p">Disabling certain cookies or storage technologies may affect the functionality of MyLocalHook.</div>
 </div>);
};

export default Content19;