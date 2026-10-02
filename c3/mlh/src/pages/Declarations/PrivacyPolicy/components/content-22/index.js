import React from "react";

const Content22 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may personalize content based on information such as:</div>
   <ul>
    {["Location;", "Interests;", "Categories followed;", "Survey responses;", "Content interactions;", 
    "Searches;", "Business interactions;", "Events;", "Community activity."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">This may affect the content, businesses, services, surveys, or advertisements displayed to you.</div>
   <div className="mtop15p">Where required by applicable law, we will provide appropriate controls or consent mechanisms 
      for personalization and profiling.</div>
 </div>);
};

export default Content22;