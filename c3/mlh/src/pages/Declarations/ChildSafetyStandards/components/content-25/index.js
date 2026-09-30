import React from "react";

const Content25 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
<div className="mtop15p">Child safety is considered when MyLocalHook develops and improves platform features.</div>
<div className="mtop15p">Depending on the feature, safety measures may include:</div>
<ul>
    {["Age-related restrictions.", "Reporting mechanisms.", "Blocking and muting controls.", 
    "Content moderation.", "Account restrictions.", "Privacy controls.", "Safety notices.", "Automated detection.", 
    "Human review.", "Abuse-prevention systems.", "Restrictions on certain interactions."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
</ul>
<div className="mtop15p">Safety measures may evolve as threats, technology, regulations, and platform features change.</div>
 </div>);
};

export default Content25;