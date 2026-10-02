import React from "react";

const Content59 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Users should understand the difference between information intentionally published publicly 
      and information provided privately to MyLocalHook.</div>
   <div className="mtop15p"><h5><b>Public Information</b></h5></div>
   <div className="mtop15p">May include:</div>
   <ul>
    {["Public profile information;", "Public posts;", "Public comments;", "Public business reviews;", "Public events;", 
    "Public ideas;", "Public survey results;", "Public community discussions."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p"><h5><b>Private or Restricted Information</b></h5></div>
   <div className="mtop15p">May include:</div>
   <ul>
    {[" Account credentials;", "Private communications;", "Certain account information;", "Non-public survey responses;", 
    "Security information;", "Other information not intentionally published."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">The exact classification depends on the feature and the user's settings.</div>
 </div>);
};

export default Content59;