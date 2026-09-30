import React from "react";

const Content18 = () =>{
  return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">Everyone using MyLocalHook can help protect children by reporting suspected violations.</div>
    <div className="mtop15p">Users should report content or accounts when they believe that:</div>
    <ul>
    {["A child is being sexually exploited.", "Someone is grooming a minor.", "CSAM is being shared or requested.", 
    "A minor is being threatened or blackmailed.", "Someone is attempting to arrange an exploitative meeting with a child.", 
    "A child is being trafficked or exploited.", "A child is being targeted by serious harassment.", 
    "An account presents an immediate child-safety risk."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}
    </ul>
    <div className="mtop15p">Reports should contain enough information for our safety team to understand the concern.</div>
    <div className="mtop15p">Users should <b>not download, copy, redistribute, or intentionally collect suspected CSAM</b> in order to submit a report.</div>
    <div className="mtop15p">If you encounter suspected CSAM, report the content through the appropriate reporting channel instead of sharing it with other people.</div>
  </div>);
};

export default Content18;