import React from "react";

const Content16 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">Child safety standards apply not only to public posts but 
        also to private interactions where MyLocalHook provides such functionality.</div>
    <div className="mtop15p">Users must not use private messages or other communication features to:</div>
    <ul>
        {["Groom minors.", "Solicit sexual material.", "Threaten minors.", "Arrange exploitative meetings.", 
        "Facilitate trafficking.", "Distribute CSAM.", "Conduct other abusive activities."]?.map((r,i)=>{
        return (<li key={i} className="mtop5p">{r}</li>);
        })}  
    </ul>
    <div className="mtop15p">MyLocalHook may use safety mechanisms, reports, moderation systems, and other 
        measures to detect and respond to serious violations, subject to applicable law and our privacy practices.
</div>
 </div>);
};

export default Content16;