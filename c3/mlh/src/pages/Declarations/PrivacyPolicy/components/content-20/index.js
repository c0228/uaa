import React from "react";

const Content20 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may provide Google or other third-party authentication options.</div>
   <div className="mtop15p">If you choose to sign in using a third-party authentication provider, we may 
      receive certain information from that provider, such as:</div>
   <ul>
    {["Name;", "Email address;", "Profile photograph;", "Account identifier;", 
    "Other information authorized or made available through the authentication provider."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">MyLocalHook does not control the privacy practices of third-party authentication providers.</div>
   <div className="mtop15p">Users should review the privacy policies of those providers separately.</div>
 </div>);
};

export default Content20;