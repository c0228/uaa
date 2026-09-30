import React from "react";

const Content12 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook may restrict or remove content that encourages children to participate in 
        dangerous activities.</div>
    <div className="mtop15p">This can include content encouraging:</div>
    <ul>
        {["Dangerous physical challenges.", "Risk-taking activities.", "Violence.", "Drug or substance use.", 
        "Dangerous use of vehicles.", "Activities involving serious physical injury.", "Self-harm.", "Criminal activity.", "Other behavior presenting a significant risk to children."]?.map((r,i)=>{
        return (<li key={i} className="mtop5p">{r}</li>);
        })}  
    </ul>
    <div className="mtop15p">Educational, documentary, or safety-related discussion may be treated differently depending 
        on context.</div>
 </div>);
};

export default Content12;