import React from "react";

const Content05 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">You may voluntarily provide information for your MyLocalHook profile, including:</div>
   <ul>
    {["Name;", "Profile photograph;", "About/bio information;", "Interests;", "Community preferences;", 
    "Locality information;", "Postal code;", "Other profile information you choose to provide."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Some profile information may be visible to other users depending on your 
      privacy settings and the functionality of the Platform.</div>
 </div>);
};

export default Content05;