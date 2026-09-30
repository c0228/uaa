import React from "react";

const Content10 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook takes the privacy and safety of children seriously.</div>
    <div className="mtop15p">Users must not publish or distribute a child's sensitive personal information for the 
        purpose of harassment, exploitation, stalking, intimidation, or other harm.</div>
    <div className="mtop15p">This may include:</div>
    <ul>
        {["Home address.", "Phone number.", "Personal email address.", "School location.", "Exact real-time location.", 
        "Private photographs.", "Private family information.", "Identification documents.", "Account credentials.", 
        "Other sensitive information that could place a child at risk."]?.map((r,i)=>{
            return (<li key={i} className="mtop5p">{r}</li>);
        })}  
    </ul>
    <div className="mtop15p">Even information that may be publicly available elsewhere may be restricted when 
        sharing it creates a significant safety risk.</div>
 </div>);
};

export default Content10;