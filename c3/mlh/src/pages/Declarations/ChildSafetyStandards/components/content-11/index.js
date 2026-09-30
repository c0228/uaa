import React from "react";

const Content11 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook prohibits bullying, harassment, intimidation, and targeted abuse involving children.</div>
    <div className="mtop15p">Examples include:</div>
    <ul>
        {["Repeatedly targeting a child with abusive comments.", "Threatening a minor.", "Encouraging others to harass a minor.", 
        "Humiliating or degrading a child.", "Creating accounts to repeatedly target a minor.", 
        "Sharing private information to encourage harassment.", "Organizing attacks against a child.", 
        "Encouraging self-harm or dangerous behavior involving a minor."]?.map((r,i)=>{
         return (<li key={i} className="mtop5p">{r}</li>);
        })}  
    </ul>
    <div className="mtop15p">We may take action against both individual users and coordinated groups involved in serious harassment.</div>
 </div>);
};

export default Content11;