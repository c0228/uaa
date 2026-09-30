import React from "react";

const Content24 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
<div className="mtop15p">MyLocalHook seeks to minimize unnecessary collection and exposure of children's personal information.</div>
<div className="mtop15p">We may apply additional privacy and safety protections where required by applicable law.</div>
<div className="mtop15p">We encourage parents, guardians, and young users to avoid publicly sharing:</div>
<ul>
    {["Home addresses.", "School schedules.", "Personal phone numbers.", "Passwords.", "Financial information.", 
    "Real-time locations.", "Identity documents.", "Other sensitive personal information."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
</ul>
<div className="mtop15p">Users should also be cautious when interacting with people they do not know offline.</div>
 </div>);
};

export default Content24;