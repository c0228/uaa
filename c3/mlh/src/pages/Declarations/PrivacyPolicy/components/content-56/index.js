import React from "react";

const Content56 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">This Privacy Policy describes MyLocalHook's general privacy practices.</div>
   <div className="mtop15p">Specific features may provide additional privacy notices, consent screens, settings, or terms.</div>
   <div className="mtop15p">For example, a survey may contain additional information about:</div>
   <ul>
    {["Why the survey is being conducted;", "Whether participation is voluntary;", "Whether responses are public;", 
    "Whether responses are anonymous;", "Whether results will be shared with businesses;", 
    "Whether information will be used for advertising;", "How long information will be retained;", 
    "Whether incentives are provided."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Users should read such notices before participating.</div>
 </div>);
};

export default Content56;