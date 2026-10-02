import React from "react";

const Content48 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Businesses using MyLocalHook may receive analytics relating to:</div>
   <ul>
    {["Views;", "Engagement;", "Enquiries;", "General audience characteristics;", "Geographic trends;", 
    "Survey-derived insights;", "Advertising performance;", "Content performance."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Where appropriate, these analytics may be aggregated or anonymized.</div>
   <div className="mtop15p">Businesses may not use MyLocalHook information to violate applicable law or our Platform policies.</div>
 </div>);
};

export default Content48;