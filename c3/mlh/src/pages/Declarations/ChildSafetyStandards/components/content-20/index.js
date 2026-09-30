import React from "react";

const Content20 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook may use a combination of:</div>
    <ul>
        {["Automated detection systems.", "Human moderation.", "User reports.", "Account signals.", 
        "Safety investigations.", "Content review.", "Other appropriate safety technologies."]?.map((r,i)=>{
        return (<li key={i} className="mtop5p">{r}</li>);
        })}  
    </ul>
    <div className="mtop15p">When we identify violations, possible actions include:</div>
    <ol>
        {["Removing content.", "Restricting content visibility.", "Limiting account functionality.", 
        "Restricting messaging or other interactions.", "Suspending an account.", "Permanently banning an account.", 
        "Removing associated accounts where appropriate.", "Preserving relevant information where legally permitted or required.", 
        "Reporting suspected illegal activity to appropriate authorities or organizations.", 
        "Taking other measures necessary to protect users."]?.map((r,i)=>{
        return (<li key={i} className="mtop5p">{r}</li>);
        })}  
    </ol>
    <div className="mtop15p">The action taken may depend on the severity, circumstances, history, and potential risk 
        associated with the violation.</div>
 </div>);
};

export default Content20;