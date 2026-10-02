import React from "react";

const Content27 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">If MyLocalHook is involved in:</div>
   <ul>
    {["A merger;", "Acquisition;", "Corporate restructuring;", "Financing;", 
    "Sale of assets;", "Investment transaction;", "Business transfer;"]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">information associated with the Platform may be transferred 
      as part of that transaction, subject to applicable law and appropriate protections.</div>
 </div>);
};

export default Content27;