import React from "react";

const Content21 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Depending on the circumstances, MyLocalHook may use information to:</div>
   <ol>
    {["Create and manage user accounts;", "Authenticate users;", "Provide Platform functionality;", "Provide local-community services;", 
    "Display geographically relevant information;", "Deliver content;", "Personalize user experiences;", "Conduct surveys;", 
    "Analyze survey results;", "Create aggregated insights;", "Improve advertising relevance;", "Provide business insights;", 
    "Process enquiries;", "Provide customer support;", "Prevent fraud and abuse;", "Detect spam;", "Enforce Platform rules;", 
    "Protect users and the Platform;", "Analyze Platform performance;", "Develop new products and features;", 
    "Conduct analytics and research;", "Communicate with users;", "Send service-related notifications;", "Provide marketing communications where permitted;", 
    "Comply with legal obligations;", "Respond to lawful governmental or regulatory requests;", "Protect legal rights;", 
    "Resolve disputes;", "Enforce agreements and policies."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ol>
 </div>);
};

export default Content21;