import React from "react";

const Content22 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">Reporting is an important safety mechanism and should be used responsibly.</div>
    <div className="mtop15p">Users must not intentionally submit false reports to:</div>
    <ul>
        {["Harass another user.", "Silence legitimate discussion.", "Retaliate against another person.", 
        "Abuse moderation systems.", "Cause another user's account to be suspended."]?.map((r,i)=>{
        return (<li key={i} className="mtop5p">{r}</li>);
        })}  
    </ul>
    <div className="mtop15p">False reporting does not prevent users from making good-faith reports where 
        they genuinely believe a safety violation has occurred.</div>
 </div>);
};

export default Content22;