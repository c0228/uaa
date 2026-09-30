import React from "react";

const Content08 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">MyLocalHook prohibits content or activities that facilitate child trafficking, 
        exploitation, forced labor, sexual exploitation, or other forms of abuse.</div>
    <div className="mtop15p">This includes:</div>
    <ul>
        {["Recruiting children for exploitation.", "Advertising children for sexual exploitation.", 
        "Facilitating the movement of children for exploitative purposes.", "Selling or purchasing access to children.", 
        "Facilitating abusive arrangements involving children.", "Sharing information that enables child trafficking or exploitation.", 
        "Recruiting children for criminal or abusive organizations."]?.map((r,i)=>{
            return (<li key={i} className="mtop5p">{r}</li>);
        })}
    </ul>
    <div className="mtop15p">We may take immediate action when content appears to create a serious risk of exploitation.</div>
 </div>);
};

export default Content08;