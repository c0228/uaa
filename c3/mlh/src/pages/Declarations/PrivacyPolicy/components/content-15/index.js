import React from "react";

const Content15 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook may allow businesses to create pages, profiles, listings, 
      advertisements, offers, services, events, or other content.</div>
    <div className="mtop15p">When users interact with businesses through MyLocalHook, information 
      may be processed to facilitate that interaction.</div>
    <div className="mtop15p">For example, depending on the feature, a business may receive 
      information that a user:</div>
    <ul>
    {["Contacted the business;", "Requested information;", "Submitted an enquiry;", 
    "Participated in a business survey;", "Responded to an offer;", "Interacted with business content."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
    <div className="mtop15p">The information shared with a business will depend on the specific 
      feature and applicable privacy settings.</div>




 </div>);
};

export default Content15;