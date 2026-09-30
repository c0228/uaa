import React from "react";

const Content17 = () =>{
  return (<div className="f-metropolis content-desc mbot15p">
  <div className="mtop15p">Users must not use MyLocalHook to direct children to external 
    websites, applications, groups, or services for the purpose of:</div>
  <ul>
      {["Sexual exploitation.", "Grooming.", "Trafficking.", "Abuse.", 
      "CSAM distribution.", "Illegal activity.", "Other serious harm."]?.map((r,i)=>{
        return (<li key={i} className="mtop5p">{r}</li>);
      })}  
  </ul>
  <div className="mtop15p">A user cannot avoid this policy by moving prohibited activity 
    from MyLocalHook to another service.</div>
  </div>);
};

export default Content17;