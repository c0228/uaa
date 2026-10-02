import React from "react";

const Content47 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may use automated technologies, machine-learning systems, or artificial intelligence 
      for purposes such as:</div>
   <ul>
    {["Content recommendations;", "Search;", "Spam detection;", "Fraud detection;", "Safety moderation;", "Categorization;", 
    "Survey analysis;", "Trend analysis;", "Customer support;", "Platform improvement."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Where automated processing has legal implications for users, MyLocalHook will provide applicable 
      rights or notices required by law.</div>
 </div>);
};

export default Content47;