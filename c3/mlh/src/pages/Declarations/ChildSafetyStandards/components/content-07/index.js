import React from "react";

const Content07 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">Users must not use MyLocalHook to solicit or attempt to solicit sexual activity or sexual material from a minor.</div>
    <div className="mtop15p">This includes requests for:</div>
    <ul>
        {["Nude images.", "Sexual photographs.", "Sexual videos.", "Sexual conversations.", "Sexual acts.", 
        "Sexual meetings.", "Sexual services.", "Sexual roleplay."]?.map((r,i)=>{
            return (<li key={i} className="mtop5p">{r}</li>);
        })}
    </ul>
    <div className="mtop15p">
        Attempts to persuade, pressure, threaten, manipulate, or bribe a minor into providing sexual 
        material are also prohibited.
    </div>
  </div>);
};

export default Content07;