import React from "react";

const Content37 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Depending on your location and applicable law, you may have rights relating to your personal information.</div>
   <div className="mtop15p">These may include rights to:</div>
   <ul>
    {["Request information about processing;", "Access personal information;", "Request correction of inaccurate information;", 
    "Request deletion;", "Withdraw consent where applicable;", "Request information about certain disclosures;", 
    "Exercise rights relating to targeted advertising or profiling where applicable;", "Raise a complaint;", 
    "Nominate or authorize another person where applicable under law."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Not every right will apply in every circumstance.</div>
   <div className="mtop15p">Some requests may be subject to legal exceptions or verification requirements.</div>
 </div>);
};

export default Content37;