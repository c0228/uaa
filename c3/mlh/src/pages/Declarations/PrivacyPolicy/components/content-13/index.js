import React from "react";

const Content13 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may use information collected through surveys and 
    other Platform interactions to improve advertising relevance.</div>
   <div className="mtop15p">For example, if users voluntarily indicate that they are interested in:</div>
   <ul>
    {["Education;", "Cars;", "Real estate;", "Restaurants;", "Local businesses;", "Jobs;", "Sports;", 
    "Travel;"]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">MyLocalHook may use such information, where legally permitted, to determine 
    which advertisements or promotional content may be relevant to those users.</div>
   <div className="mtop15p">Advertising may be selected using information such as:</div>
    <ul>
    {["Interests;", "Survey responses;", "Geographic area;", "Content interactions;", "Categories followed;", 
    "Search activity;", "Platform activity;", "Device or technical information;", "Other permitted signals."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">Where applicable law requires consent for personalized advertising or certain 
    forms of profiling, MyLocalHook will obtain and manage that consent as required.</div>
 </div>);
};

export default Content13;