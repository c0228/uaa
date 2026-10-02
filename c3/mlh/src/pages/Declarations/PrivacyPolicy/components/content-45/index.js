import React from "react";

const Content45 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">We may send users communications relating to:</div>
   <ul>
    {["Account activity;", "Security;", "Platform changes;", "Policy updates;", "Survey invitations;", 
    "Service notifications;", "Support requests;", "Business interactions;", "Marketing communications where permitted."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Users may be able to opt out of certain promotional communications.</div>
   <div className="mtop15p">Some essential service or security communications may continue even after 
      marketing preferences are changed.</div>
 </div>);
};

export default Content45;