import React from "react";

const Content52 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may update this Privacy Policy from time to time.</div>
   <div className="mtop15p">Changes may be made because of:</div>
   <ul>
    {["New Platform features;", "New data practices;", "Changes in law;", "Changes in technology;", 
    "Changes in business operations;", "Security requirements;", "Regulatory guidance."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">When we make material changes, we may provide additional notice where required.</div>
   <div className="mtop15p">The “Last Updated” date at the beginning of this Privacy Policy indicates when 
      the policy was most recently updated.</div>
 </div>);
};

export default Content52;