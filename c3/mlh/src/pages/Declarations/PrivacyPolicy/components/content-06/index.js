import React from "react";

const Content06 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook is a local-community platform, and location is an important 
      part of our services.</div>
   <div className="mtop15p">We may collect or process location-related information such as:</div>
   <ul>
    {["Postal code/PIN code;", "State;", "District;", "Local government area;", "Ward;", "Village;", 
    "Mandal/Sub-district;", "Parliamentary constituency;", "Assembly constituency;", "Other geographic or administrative areas;",
   "Approximate location;", "Device-derived location, where you permit access;", "Location selected manually by you;", 
   "Home or preferred location;", "Current location when you choose to use location-based functionality."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">For example, you may select a home location and separately use your current location while travelling.</div>
   <div className="mtop15p">We may use this information to show locally relevant:</div>
   <ul>
    {["News;", "Community discussions;", "Events;", "Businesses;", "Jobs;", "Educational opportunities;", 
    "Government information;", "Services;", "Surveys;", "Advertisements;", "Other content."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p"><h5 className="color-black"><b>Location Does Not Automatically Mean Precise GPS Tracking</b></h5></div>
   <div className="mtop15p">Providing a postal code or selecting a locality does not necessarily mean that 
      MyLocalHook continuously tracks your physical location.</div>
   <div className="mtop15p">Where device location services are used, we will request the applicable permission 
      and process location information according to your device settings and applicable law.</div>
 </div>);
};

export default Content06;