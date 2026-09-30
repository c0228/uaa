import React from "react";

const Content06 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook prohibits content or behavior that sexualizes children.</div>
    <div className="mtop15p">This includes:</div>
    <ul>
        {["Sexual comments about children.", "Sexualized descriptions of minors.", "Sexual requests involving minors.", 
        "Fetishization of minors.", "Sexual jokes involving children.", "Sexualized images or depictions of minors.", 
        "Requests for intimate images from minors.", "Content encouraging others to sexually objectify children."]?.
        map((r,i)=>{
            return (<li key={i} className="mtop5p">{r}</li>);
        })}
        
    </ul>
    <div className="mtop15p">
        The fact that content is presented as a joke, fictional scenario, roleplay, meme, artistic work, or educational 
        discussion does not automatically make otherwise prohibited material acceptable.
    </div>
 </div>);
};

export default Content06;