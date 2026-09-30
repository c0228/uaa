import React from "react";

const Content34 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">Child-safety threats evolve over time.</div>
    <div className="mtop15p">MyLocalHook may periodically update:</div>
    <ul>
        {["Detection systems.", "Moderation processes.", "Reporting tools.", "Account protections.", 
        "Privacy controls.", "Safety education.", "Enforcement procedures.", 
        "This Child Safety Standards Policy."]?.map((r,i)=>{
            return (<li key={i} className="mtop5p">{r}</li>);
        })}  
    </ul>
<div className="mtop15p">We may update this policy when necessary to reflect changes in our services, technology, 
    applicable laws, or child-safety practices.</div>
 </div>);
};

export default Content34;