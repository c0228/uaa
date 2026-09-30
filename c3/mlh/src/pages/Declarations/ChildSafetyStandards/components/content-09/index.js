import React from "react";

const Content09 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">Users must not threaten or manipulate minors using intimate or personal material.</div>
   <div className="mtop15p">Prohibited behavior includes:</div>
   <ul>
    {["Threatening to publish a minor's private images.", "Demanding money in exchange for not publishing intimate material.", 
    "Demanding additional images or sexual activity.", "Threatening to contact family members, schools, employers, or friends.", 
    "Using hacked, stolen, or obtained personal information to threaten a minor.", 
    "Encouraging another person to participate in sextortion."]?.map((r,i)=>{
        return (<li key={i} className="mtop5p">{r}</li>);
    })}
   </ul>
   <div className="mtop15p">Users experiencing this type of abuse should report the account immediately.</div>
 </div>);
};

export default Content09;