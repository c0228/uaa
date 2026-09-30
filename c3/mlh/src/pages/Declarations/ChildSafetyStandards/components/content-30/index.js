import React from "react";

const Content30 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
 <div className="mtop15p">Users should protect their accounts from unauthorized access.</div>
 <div className="mtop15p">Users should:</div>
 <ul>
    {["Use strong passwords.", "Avoid sharing passwords.", "Enable available security protections.", 
    "Report suspicious account activity.", "Avoid sharing sensitive information publicly."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
</ul>
<div className="mtop15p">If an account belonging to a minor appears to have been compromised, users 
    should report the incident through the appropriate support channel.</div>
 </div>);
};

export default Content30;