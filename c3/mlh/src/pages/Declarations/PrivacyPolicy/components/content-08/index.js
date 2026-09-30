import React from "react";

const Content08 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Survey information may be used for several purposes, including:</div>
   <ul>
    {["Understanding community preferences;", "Understanding consumer interests;", "Improving MyLocalHook;", 
    "Improving local services;", "Creating aggregated insights;", "Developing new features;", 
    "Measuring user preferences;", "Helping businesses understand market demand;", 
    "Improving advertising relevance;", "Creating advertising audiences where legally permitted;", 
   "Providing statistical information;", "Conducting research and analysis;", "Identifying trends;",
   "Generating reports;", "Supporting business intelligence services;", 
   "Improving recommendations and personalization."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">The manner in which survey information is used depends on the survey, the 
      information collected, the user's consent or applicable legal basis, and the applicable law.</div>
 </div>);
};

export default Content08;