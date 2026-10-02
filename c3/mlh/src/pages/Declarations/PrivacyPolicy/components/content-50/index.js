import React from "react";

const Content50 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">If MyLocalHook introduces private messaging or similar functionality, communications intended 
      to be private will be treated differently from publicly published content.</div>
   <div className="mtop15p">However, MyLocalHook may process limited information necessary to:</div>
   <ul>
    {["Deliver messages;", "Prevent abuse;", "Detect spam;", "Maintain security;", "Investigate reports;", 
    "Comply with applicable law."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Users should not assume that any online communication service provides absolute confidentiality.</div>
 </div>);
};

export default Content50;