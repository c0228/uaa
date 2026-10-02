import React from "react";

const Content46 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may use analytics technologies to understand:</div>
   <ul>
    {["How users use the Platform;", "Which features are popular;", "Where errors occur;", "How content performs;", 
    "How users navigate the Platform;", "How advertisements perform;", "How surveys perform."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Analytics information may be aggregated or associated with 
      user or device identifiers depending on the service and applicable law.</div>
 </div>);
};

export default Content46;