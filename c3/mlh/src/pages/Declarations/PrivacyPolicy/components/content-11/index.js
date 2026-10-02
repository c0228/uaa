import React from "react";

const Content11 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook may create anonymous, de-identified, 
      aggregated, or statistical information from survey responses.</div>
    <div className="mtop15p">For example, individual responses such as:</div>
    <ul>
      {["User A: Option 1;", "User B: Option 1;", "User C: Option 2;", "User D: Option 1;"]?.map((r,i)=>{
         return (<li key={i} className="mtop5p">{r}</li>);
      })}  
    </ul>
    <div className="mtop15p">may be converted into an aggregate result such as:</div>
    <div className="mtop15p"><b>“75% selected Option 1.”</b></div>
    <div className="mtop15p">Aggregated or sufficiently de-identified information may be used for:</div>
    <ul>
      {["Public statistics;", "Business insights;", "Advertising insights;", "Research;", 
      "Product development;", "Market analysis;", "Reports;", "Community analysis."]?.map((r,i)=>{
         return (<li key={i} className="mtop5p">{r}</li>);
      })}  
     </ul>
     <div className="mtop15p">We will take reasonable measures appropriate to the circumstances to 
      prevent aggregated information from being used to identify individual users.</div>
 </div>);
};

export default Content11;