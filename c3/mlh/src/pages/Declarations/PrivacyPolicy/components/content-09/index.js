import React from "react";

const Content09 = () =>{
 return (<div className="f-metropolis content-desc mbot15p">
    <div className="mtop15p">Some MyLocalHook surveys may be designed to generate community-level or public results.</div>
    <div className="mtop15p">For example, MyLocalHook may conduct a survey asking:</div>
    <div className="mtop15p color-black"><b>“Which type of local restaurant do people in this area prefer?”</b></div>
    <div className="mtop15p">The resulting information may be displayed as:</div>
    <div className="mtop15p" style={{ borderLeft:'3px solid #ccc' }}>62% of participating respondents selected Option A.</div>
    <div className="mtop15p">Similarly, MyLocalHook may publish statistics relating to a locality, postal code, city, 
      district, or other geographic area.</div>
    <div className="mtop15p">Where survey information is intended to be publicly displayed, we will seek to present 
      the information in a manner designed to avoid unnecessarily exposing individual responses.</div>
    <div className="mtop15p">Public survey results may include:</div>
    <ul>
    {["Percentages;", "Counts;", "Charts;", "Trends;", "Aggregate statistics;", 
    "Geographic summaries;", "Category preferences;", "General demographic or interest summaries where legally permitted."]?.map((r,i)=>{
      return (<li key={i} className="mtop5p">{r}</li>);
    })}  
   </ul>
 </div>);
};

export default Content09;