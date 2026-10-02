import React from "react";

const Content23 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may display advertisements from MyLocalHook or third-party advertisers.</div>
   <div className="mtop15p">Advertisements may be selected based on permitted information such as:</div>
   <ul>
    {["Geographic area;", "General interests;", "Survey responses;", "Content categories;", 
    "Platform interactions;", "Context of the page;", "Device information;", "Advertising preferences."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Third-party advertising providers may independently collect information through their 
      own technologies where permitted.</div>
   <div className="mtop15p">Their processing is governed by their respective privacy policies.</div>
 </div>);
};

export default Content23;