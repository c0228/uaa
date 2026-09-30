import React from "react";

const Content32 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
<div className="mtop15p">Reports may be reviewed using automated systems, human review, or a combination of both.</div>
<div className="mtop15p">Depending on the circumstances, we may:</div>
<ul>
    {["Review the reported content.", "Review relevant account activity.", "Remove violating content.", 
    "Restrict the account.", "Suspend or permanently terminate the account.", 
    "Escalate the matter to a specialized safety team.", "Preserve information where appropriate.", 
    "Contact or cooperate with relevant authorities where legally required or appropriate."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
</ul>
<div className="mtop15p">We may not be able to disclose all actions taken because of privacy, security, legal, 
    or investigative considerations.</div>
 </div>);
};

export default Content32;