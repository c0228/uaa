import React from "react";

const Content29 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Users may request deletion of their MyLocalHook account, subject to applicable law and 
      legitimate retention requirements.</div>
   <div className="mtop15p">When an account is deleted, we may delete or anonymize information associated with 
      the account within reasonable operational periods.</div>
   <div className="mtop15p">However, certain information may need to be retained where necessary for:</div>
   <ul>
    {["Legal compliance;", "Fraud prevention;", "Security;", "Dispute resolution;", "Enforcement of policies;", 
    "Financial or accounting requirements;", "Protection of legal rights."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Content that has already been aggregated, anonymized, or incorporated into statistical 
      reports may not be capable of being individually removed because it may no longer be associated with the user.</div>
 </div>);
};

export default Content29;