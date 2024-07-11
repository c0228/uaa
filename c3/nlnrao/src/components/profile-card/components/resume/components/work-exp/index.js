import React from "react";

const data = [(<div>Worked as <span className="text-grey2"><b>Software Engineer</b></span> in <span className="text-grey2"><b>Synergy Netsoft Limited</b></span> from June 2012 
  to March 2018.</div>),
 (<div>Worked as <span className="text-grey2"><b>Software Engineer</b></span> (Contract Role) in <span className="text-grey2"><b>United Health Group</b></span> (Under 
 payroll of <span className="text-grey2"><b>Technosoft Company</b></span>) from March 2018 to June 2018.</div>),
 (<div>Worked as <span className="text-grey2"><b>Senior Associate Projects (Technical Lead)</b></span> in <span className="text-grey2"><b>Cognizant Technology 
    Solutions (CTS)</b></span> from November 2018 to June 2021.</div>),
 (<div>Worked as <span className="text-grey2"><b>Technical Lead</b></span> in <span className="text-grey2"><b>Quadratics Software Systems</b></span> from June 2021 to April 2022.</div>),
 (<div>Working as <span className="text-grey2"><b>Technical Lead</b></span> in <span className="text-grey2"><b>Tescra Software Systems</b></span> from May 2022 to till Now.</div>),
];

const WorkExperience = () =>{
 return (<div className="card resume-card mb-3">
    <div className="card-body resume-cardBody">
    <ul>
        {data?.map((d,i)=>{
            return (<li key={i} className="mbot15p">{d}</li>);
        })}
    </ul>
    </div>
 </div>);
};

export default WorkExperience;