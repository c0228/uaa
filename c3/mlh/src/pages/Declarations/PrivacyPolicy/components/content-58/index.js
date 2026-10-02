import React from "react";

const Content58 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may use information provided through surveys to make the Platform more useful.</div>
   <div className="mtop15p">For example, a survey may ask:</div>
   <div className="mtop15p"><b>“Which services are you interested in?”</b></div>
   <div className="mtop15p">If you select:</div>
   <div className="mtop15p"><h5 className="color-black"><b>Home Improvement</b></h5></div>
   <div className="mtop15p">MyLocalHook may use that information, where permitted, to show you relevant:</div>
   <ul>
    {["Business listings;", "Local services;", "Content;", "Offers;", "Surveys;", "Advertisements."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">The purpose of this processing is to make information more relevant to the user and to 
      help businesses reach potentially interested audiences.</div>
   <div className="mtop15p">Where consent is legally required for this type of processing, we will provide the 
      appropriate consent mechanism.</div>
 </div>);
};

export default Content58;