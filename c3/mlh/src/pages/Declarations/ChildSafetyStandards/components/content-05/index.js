import React from "react";

const Content05 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook prohibits grooming and other predatory behavior involving children.</div>
    <div className="mtop15p">Grooming may involve building trust or emotional relationships with a child with the intention of 
        exploiting, abusing, manipulating, or sexually exploiting them.</div>
    <div className="mtop15p">Examples of prohibited behavior include:</div>
    <ul>
        {["Establishing a relationship with a minor for sexual purposes.", 
        "Gradually introducing sexual conversations to a minor.", 
        "Asking a minor to keep interactions secret from parents or guardians.", 
        "Requesting sexual images or videos from a minor.", 
        "Offering gifts, money, services, or other benefits in exchange for sexual interaction.", 
        "Attempting to move a minor to another platform for exploitative purposes.", 
        "Asking a minor to meet privately for exploitative purposes.", 
        "Using threats or emotional manipulation to obtain sexual material.", 
        "Creating fake identities to establish inappropriate relationships with minors.", 
        "Encouraging a minor to hide communications from trusted adults."]?.map((r,i)=>{
            return (<li key={i} className="mtop5p">{r}</li>);
        })}
    </ul>
    <div className="mtop15p">Grooming behavior may be prohibited even when no explicit sexual content has yet 
        been exchanged.</div>
 </div>);
};

export default Content05;