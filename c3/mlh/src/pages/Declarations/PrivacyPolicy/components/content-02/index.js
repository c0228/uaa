import React from "react";

const Content02 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">This Privacy Policy applies to information collected through:</div>
   <ul>
    {["The MyLocalHook website;", "MyLocalHook mobile applications;", "MyLocalHook user accounts;", 
    "Community and social features;", "Posts, comments, discussions, reactions, and other user-generated content;", 
    "Surveys and questionnaires;", "Business pages and business-related services;", 
    "Advertisements and advertising-related features;", "Location and local-community features;", 
    "Events and community activities;", "Customer support and communications;", "Promotional campaigns;", 
    "Any other MyLocalHook service that links to or references this Privacy Policy."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
</ul>
   <div className="mtop15p">This Privacy Policy may also apply when you interact with MyLocalHook through third-party 
   services or integrations where MyLocalHook receives information from those services.</div>
</div>);
};

export default Content02;