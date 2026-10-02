import React from "react";

const Content42 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">When users report content, accounts, surveys, advertisements, or other activity, we may collect 
      information associated with the report.</div>
   <div className="mtop15p">This may include:</div>
   <ul>
    {["The reported content;", "The reporting account;", "Reason for the report;", "Relevant technical information;", 
    "Communications concerning the report."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">We use this information to:</div>
   <ul>
    {["Investigate reports;", "Enforce policies;", "Protect users;", "Prevent abuse;", "Improve moderation;", 
    "Comply with legal obligations."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
 </div>);
};

export default Content42;