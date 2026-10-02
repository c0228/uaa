import React from "react";

const Content49 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">You should not provide another person's personal information to MyLocalHook unless you 
      have a lawful basis or appropriate authorization to do so.</div>
   <div className="mtop15p">For example, do not upload another person's:</div>
   <ul>
    {["Private contact information;", "Identification documents;", "Financial information;", "Private communications;", 
    "Sensitive information;"]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">without appropriate authorization.</div>
 </div>);
};

export default Content49;