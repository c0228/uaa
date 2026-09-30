import React from "react";

const Content07 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">One of the important features of MyLocalHook is the ability to conduct surveys 
      and ask users questions about their preferences, opinions, experiences, interests, needs, and views.</div>
   <div className="mtop15p">Users may be invited to participate in surveys relating to topics such as:</div>
   <ul>
    {["Local businesses;", "Products and services;", "Education;", "Employment;", "Community needs;", 
    "Local infrastructure;", "Transportation;", "Events;", "Consumer preferences;", "Shopping preferences;",
   "Local services;", "Community issues;", "Advertising preferences;", "General opinions;", 
   "Other subjects presented through MyLocalHook."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Participation in a survey may be voluntary unless clearly stated otherwise.</div>
 </div>);
};

export default Content07;