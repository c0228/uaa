import React from "react";

const Content12 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
   <div className="mtop15p">MyLocalHook may provide businesses with insights derived from surveys.</div>
   <div className="mtop15p">For example, a business may want to understand:</div>
   <ul>
    {["What customers in a particular locality prefer;", "Which services customers are interested in;", 
    "What price ranges customers consider;", "What products customers are looking for;", 
    "What days or times customers prefer;", "Which categories are receiving increased interest."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}
   </ul>
   <div className="mtop15p">Businesses may receive aggregated, statistical, or otherwise permitted insights.</div>
   <div className="mtop15p">Unless clearly disclosed and legally permitted, MyLocalHook does not intend to provide 
      businesses with a user's private account information simply because that user participated in a survey.</div>
 </div>);
};

export default Content12;