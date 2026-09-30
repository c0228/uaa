import React from "react";

const Content04 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">You may provide information to MyLocalHook when you create an account, complete your 
      profile, participate in a survey, publish content, contact us, interact with businesses, or use other Platform 
      features.</div>
   <div className="mtop15p">This may include:</div>
   <div className="mtop15p"><h5><b>Account Information</b></h5></div>
   <div className="mtop15p">Depending on the registration method you use, we may collect:</div>
   <ul>
    {["Name;", "Email address;", "Profile photograph;", "Account identifier;", 
    "Login information or authentication-related information;", "Date of account creation;", 
    "Account preferences;", "Other information you choose to provide"]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
   <div className="mtop15p">If you use Google or another supported third-party authentication provider, we may 
      receive information that the provider makes available to us based on your authorization and the provider's 
      policies.</div>
   <div className="mtop15p">We do not necessarily receive every piece of information associated with your 
      third-party account.</div>
 </div>);
};

export default Content04;